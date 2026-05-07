import axios from "axios";
import { useEffect, useState } from "react";
import queryString from "query-string";
import "../css/common.css";
import { Link } from "react-router-dom";

export default function Gallery(props) {

    const [allData, setAllData] = useState({ data: [], total: 0 });
    const [error, setErr] = useState("");
    let [showMe, setshow] = useState([{ id: 0, show: false }]);
     let size = 30;
     let apiKey = 'your perenual data api key';
    let queryParam = queryString.parse(props.location.search);
    let { page } = queryParam;
    console.log(page)
    let startIndex = (page - 1) * size;
    let lastIndex = allData.total > startIndex + size - 1 ? startIndex + size - 1 : allData.total - 1;

    useEffect(() => {
     let base_url =`http://127.0.0.1:5000/gallery?page=${page}`;

        const fetchData = async () => {
            try {
                let res = await axios.get(base_url);
                console.log(res.data);
              
                setshow(res.data.data.map((s, i) => ({
                 id: res.data.data[i].id,
                 show: false
                })));
              
                setAllData(res.data)  
            } catch (err) {
                setErr(err.message)
            }
        }
 fetchData();
    },[page])
       
  const setthat = (id) => { 
    setshow(prev=>prev.map(user=>
        user.id==id?user.show?{...user, show:false}:{...user,show:true}:user
    ));
    }

    return (
        <div className="common container">
            <div className=" gallery-container">
                <h1 className="hd-common  fw-bold">🌱 Here is Our Gallery Photos . . . </h1>
                {allData.data.map((p1, index) => {

                    return (
                        <div className="col-lg-12 border border-success py-3" key={index} style={{ height: "auto" }}>
                            <div className="row g-3 ">
                                {p1.images.map((m1) => {

                                    return (
                                        <div className="crd-2 col-lg-3">
                                            <img src={m1.original_url} className="newcd" alt="disease" />
                                        </div>
                                    )
                                })}

                                <div className="card-body p-3 col-lg-8">
                                    <h3 className="card-heading">{p1.common_name}</h3>
                                    <p className="card-text">Scientific Name : {p1.scientific_name}</p>
                                    <p style={{ marginBottom: 0 }}>Belongs To : <span className="text-secondary">{p1.host[0]}</span> </p>
                                    <hr />
                                 {showMe.length>1?showMe[index].show==true?( p1.description.map((r, dex) => <div >
                                        <h6>Q.{dex + 1}.{r.subtitle}</h6>
                                        <p><span className="text-dark fw-bolder">A.{dex + 1}.</span> {r.description}</p>
                                    </div>) ): "":""}
                                    <a style={{color:"blue",cursor:"pointer",fontSize:"20px"}} 
                                    onClick={()=>setthat(p1.id)}>{p1.description.length>0?showMe[index].show ? "Read less.." : "Read more...":""}</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className="row h2">
                    <div className="col-1">
                        {startIndex > 0 ? <a href={`/gallery?page=${+page - 1}`}>prev</a> : ""}</div>
                    <div className="col-10"></div>
                    <div className="col-1 ">
                        {lastIndex < (allData.total - 1) ? <a href={`/gallery?page=${+page + 1}`}>next</a> : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}

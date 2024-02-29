import React,{useEffect,useState} from "react";
import Navbar from "../componets/Navbar";
import Footer from "../componets/Footer";
import Card from "../componets/Card";
import Carousel from "../componets/Carousel";

function Home() {
  const [foodcat,setFoodcat]=useState([])
  const [fooditems,setFooditems]=useState([])
  const [search , setSearch] = useState("")
  const loadData = async()=>
  {
    let response = await fetch('http://localhost:3005/api/foodData',{
      method:"POST",
      headers:
      {
        "Content-Type": "application/json"
      }
    })
    response = await response.json()
   // console.log(response[0],response[1])
   setFooditems(response[0])
   setFoodcat(response[1])
  }

  useEffect(()=>{
    loadData()
  },[])


  return (
    <div className="">
      <Navbar />
      <div>
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ objectFit: "contain !important"}}
      >
        <div class="carousel-inner" id="carousel">
          <div class="carousel-caption" style={{ zIndex: "10" }}>
            <div class="d-flex justify-content-center">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search" value = {search} onChange={(e)=>{setSearch(e.target.value)}}
              />
              <button class="btn btn-outline-success bg-success text-white" type="submit">
                Search
              </button>
            </div>
          </div>
          <div class="carousel-item active">
            <img
              src="https://source.unsplash.com/random/900×700/?pizza"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://source.unsplash.com/random/900×700/?pastry"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://source.unsplash.com/random/900×700/?burger"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      </div>
        <div className="container">
          {
            foodcat!==[]?foodcat.map((data)=>{
              return (
                <div className="row mb-3">
                <div key={data._id} className="fs-3 m-3">
                  {data.CategoryName}
                  </div>
                  <hr />
                  {fooditems !== []? 
                  fooditems.filter((item)=>item.CategoryName===data.CategoryName &&(item.name.toLowerCase().includes(search.toLowerCase()))).map(filterItems=>{
                    return (
                      <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                         <Card foodItem={filterItems}
                         options = {filterItems.options[0]}
                         ></Card>
                      </div>
                    )
                  }):"no data"
                }
                  </div>
              )
            }):""
          } 
        </div>
      <Footer />
    </div>
  );
}

export default Home;

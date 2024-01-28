import Project from "../assets/IMG_20240128_115047.jpg";

const HomePage = () => { 
  return (
    <div className="homepages min-vh-100">
      <div className="biodata justify-content-center">
        <div className="bg-data rounded shadow-sm">
          <h1 className="pt-5 text-center align-content-center"> Bidata</h1>
          <p>Nama : Hildan </p>
          <p>tahun lahir : 2006</p>
          <p>umur : 17 sekarang</p>
          <p>kelas : 12 </p>
          <p>makanan kesukaan : ikan , makanan manis</p>
          <p>
          hobi : main gitar , ngoding jogging, voli, main game</p>
          <p>hall yang gak di suka : ngerokok , rasis</p>
          <p>cita-cita : bos muda<br/>
          </p>
        </div>
      </div>
        <h1 className="text-center">My project</h1>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quod cupiditate quia unde esse, accusantium!</p>
        <div  className=" project" >
        <div className=" project-content rounded shadow-sm">
          <img src={Project} alt="project" />
          <div>
          <a className="btn btn-danger mt-3 rounded" href="https://hildanrizkibv2.github.io/reactjsx/">lihat project</a>
          </div>
        </div>
        </div>
    </div>
    )
}
export default HomePage
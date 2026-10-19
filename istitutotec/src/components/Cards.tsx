export const Cards = () => {
    return (
        <div className="row">
               <div className="col-md-4">
                   <div className="card">
                      <img src="immagini/web-developer.jpg" className="card-img-top"/>
                      <div className="card-body">
                        <h2 className="card-title">Web Developer</h2>
                        <a href="#webdeveloperx" className="btn btn-primary">Clicca</a>
                      </div>
                   </div>
               </div>

               <div className="col-md-4">
                   <div className="card">
                      <img src="immagini/Cisco.jpg" className="card-img-top"/>
                      <div className="card-body">
                        <h2 className="card-title">Cisco CCNA</h2>
                        <a href="#ciscoccnax" className="btn btn-primary">Clicca</a>
                      </div>
                   </div>
               </div>

               <div className="col-md-4">
                   <div className="card">
                      <img src="immagini/Autocad.jpg" className="card-img-top"/>
                      <div className="card-body">
                        <h2 className="card-title">Autocad Rendering e stampa 3D</h2>
                        <a href="#autocadx" className="btn btn-primary">Clicca</a>
                      </div>
                   </div>
               </div>

           </div>
    );
};
import "../assets/Style/Carrusel.css"

export function Carrusel() {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide w-100 p-3">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://firebasestorage.googleapis.com/v0/b/enfermeriasab-4b787.appspot.com/o/enfermeriacuatro.jpg?alt=media&token=0e0603c3-4b8a-46f7-bc17-2d099344c9e1" className="d-block w-100 h-600" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/enfermeriasab-4b787.appspot.com/o/enfermeriauno.jpg?alt=media&token=486fd395-ec39-4d9e-a5c7-869eedf64513" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/enfermeriasab-4b787.appspot.com/o/enfermeriados.jpg?alt=media&token=27d53082-935c-4ea8-9a66-9d434509cd53" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}
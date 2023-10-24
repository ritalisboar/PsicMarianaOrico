import React from "react"

const HomeSection = () => {
  return(
    <>
      <div id="home">
         <section className="section" id="home">
        <div className="container grid">
          <div className="image">
            <img
              src="https://source.unsplash.com/random"
              alt="foto da psicóloga Mariana Orico: mulher branca, de cabelos cacheados, usando óculos"
              style={{
                width: "12rem",
                height: "12rem",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="text">
            <h4 className="title">Mariana Orico Rezende Barroso</h4>
            <p>
              Psicóloga Clínica | CRP 19/4950
            </p>
            <a className="buttonConsulta" href="whatsapp">Agente sua consulta!</a>
          </div>
        </div>
      </section>

      <div className="divider-1"></div>
      </div>
    </>
  )
}

export default HomeSection
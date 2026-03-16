
import React from "react";

export default function App() {

  const services = [
    {icon:"⚽", title:"Private Training", text:"1-on-1 sessions focused on technical growth and confidence."},
    {icon:"👥", title:"Group Sessions", text:"Train with friends or teammates with group discounts."},
    {icon:"🧤", title:"Goalkeeper Training", text:"Position-specific goalkeeper coaching."},
    {icon:"🎯", title:"Skill Development", text:"Agility, dribbling, passing, shooting and game skills."}
  ];

  const pricing = [
    {name:"Private Session", price:"$25 / hour"},
    {name:"Group Training", price:"Contact for group rates"},
    {name:"Goalkeeper Training", price:"$25 / hour"}
  ];

  return (
    <div style={{fontFamily:"Arial", background:"#071120", color:"white"}}>

      <header style={{padding:"20px", borderBottom:"1px solid #333"}}>
        <h2>Briarcliff <span style={{color:"#f97316"}}>Soccer</span> Lessons</h2>
      </header>

      <section style={{padding:"60px 20px"}}>
        <h1 style={{fontSize:"48px"}}>
          Private Soccer Training Ages 5–14
        </h1>
        <p style={{maxWidth:"600px"}}>
          Personalized training at Briarcliff High School to help young players improve skills,
          confidence, and love for the game.
        </p>
        <img src="/images/briarcliff-field.jpg" style={{width:"100%",maxWidth:"700px",marginTop:"20px"}}/>
      </section>

      <section style={{padding:"40px 20px"}}>
        <h2>Services</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:"20px"}}>
          {services.map(s=>(
            <div key={s.title} style={{background:"#0b1a2b",padding:"20px",borderRadius:"10px"}}>
              <div style={{fontSize:"30px"}}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{padding:"40px 20px"}}>
        <h2>Pricing</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:"20px"}}>
          {pricing.map(p=>(
            <div key={p.name} style={{background:"#0b1a2b",padding:"20px",borderRadius:"10px"}}>
              <h3>{p.name}</h3>
              <h2 style={{color:"#f97316"}}>{p.price}</h2>
              <p>Contact us to book</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{padding:"40px 20px"}}>
        <h2>About</h2>

        <div style={{marginTop:"20px"}}>
          <h3>Rohan Karnik</h3>
          <p>(917) 733-0846</p>
          <p>
          I have played soccer for 10+ years and will be entering my third year on the Briarcliff
          Varsity Soccer team. My goal is to help younger players improve and have fun playing soccer.
          </p>
          <img src="/images/rohan.jpg" style={{width:"300px"}}/>
        </div>

        <div style={{marginTop:"40px"}}>
          <h3>Gabriel Lucht</h3>
          <p>(914) 398-8973</p>
          <p>
          Varsity goalkeeper at Briarcliff High School helping younger players learn goalkeeper
          skills and confidence.
          </p>
          <img src="/images/gabriel.jpg" style={{width:"300px"}}/>
        </div>

      </section>

      <section style={{padding:"40px 20px"}}>
        <h2>Contact</h2>
        <p>Location: Briarcliff High School</p>
        <p>Rohan Karnik: (917) 733-0846</p>
        <p>Gabriel Lucht: (914) 398-8973</p>
        <p>Payment: Cash at session</p>
      </section>

    </div>
  );
}

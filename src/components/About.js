import React from 'react'

function About() {
    return (
      <>
      <h1>About Us</h1>
        <p>
        The Pet-Heaven is a non-profit, registered animal welfare organization.To continue our vital role as animal protectors, we rely primarily on donations from our supporters. 
        </p>
        <br></br>
           <h1>Please do come and join us</h1>
<p>We are looking for volunteers in the following areas.</p><br></br>
<p>In the event that anything piques your interest, please sign up anyhow! We do have volunteers who assist in multiple capacities.
There is always room for more help, and we appreciate it all! </p>
        
        <section class="sectionR">
          <br></br>
          <img src='https://media.istockphoto.com/id/1034613010/photo/girl-hugging-her-dog.jpg?s=612x612&w=0&k=20&c=IoeFkLNlod9XHk8ZjsH_OzeB0TVK-nKfiK78zf8pDFc='
          style= {{
            width : '600px',
            height: '340px',

          }}/>
          <div className='map-container'>
          <h1>
            Our Location
          </h1>
          <iframe
  title="Pet Heaven Location"
  className="map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6775888890793!2d103.89151551385928!3d1.3701342618938055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17b732af8963%3A0x79179aa19371c70!2sPetHeaven!5e0!3m2!1sen!2ssg!4v1677589889662!5m2!1sen!2ssg"
  width="600"
  height="450"
  allowfullscreen=""
  loading="lazy"
></iframe>

          </div>
          </section>
      </>
    );
  }
  
export default About
import React from 'react'

function About() {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black w-max-content mx-auto h-max-content text-white'>
      
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                About
            </p>
        </div>
        <div>
            <p className='text-xl mt-20'>
            Passionate about Software development and currently a graduate student at Northeastern University. 
            After the completion of my Bachelor from VIT Vellore, 
        India worked for Virtusa consultancy services, Hyderabad, India for 2 years as a Full-Stack developer.
        Having a track record of developing code and digital solutions using cutting-edge technologies in mostly financial services.
        My work mainly revolve around developing new features for the insurance application from end to end. 
        Other than that was also responsible for the production support where it needed to resolve defects in real-time.
            </p>
            <br />
            <p className='text-xl w-120'>
            My expertise lies in the following:
            <br />
            <b className='text-blue-500'>Programming Languages:</b> <span> Java, JavaScript, Typescript, Python, MATLAB, Object-Oriented Design</span> <br />
            <b className='text-blue-500'>Technologies:</b> <span>HTML5, CSS3, Bootstrap5, Express, Node JS, JSON, RESTful APIs, Swing, GitOps,Sequelize Frameworks </span> <br />
            <b className='text-blue-500'>Databases:</b>  <span>Hibernate, Spring, Spring-boot, React JS, MySQL, MongoDB, PostgreSQL </span> <br/>
            <b className='text-blue-500'>Software/Tools:</b> <span>TortoiseHg, Jenkins, Postman, Eclipse, NetBeans, Tomcat, VS Code, Jira, Terraform, DevOps, Github Action, CI/CD</span><br/>
            <b className='text-blue-500'>Cloud Technology: </b><span>Terraform, IAM, EC2, RDS, CloudWatch, Metrics, AMI , User Data</span><br/>
            </p>
        </div>
      </div>
    </div>
  )
}

export default About;

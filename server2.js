//creating my server, step 1
const http = require('http')
// declaring and defining my port
const PORT = 3100
const hostname = '127.0.0.1'
//now creating my server

http.createServer (function(req,res){ const autobiography = 'Felicitous Mulie Nkhoma is a Malawian girl with a passion for technology and innovation. As a third-year commerce student, she is pursuing a major in Information and Auditing Systems, under African Agility Foundation, she is Backend Development student of the ongoing cohort. Beyond academics, She  is also a digital creative with expertise in graphic design and professional writing. She effectively manages social media platforms and is also an enthusiastic follower of fintech trends. Her diverse interests and skills converge to shape her into a dynamic and multifaceted individual, poised to make a meaningful impact in the tech industry.'
     res.writeHead(200,{'content-Type': 'text/html'})
     res.end(autobiography);

}).listen(PORT)




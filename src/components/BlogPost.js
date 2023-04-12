import { useParams } from "react-router-dom";
import blogData from '../public/blogs.json'
import BlogNav from "./BlogNav";
import { CodeBlock, dracula } from "react-code-blocks";



const BlogPost = () => {
//   const { state } = useLocation();
    const {id} = useParams();
    const blog = blogData.filter(b=>b.id===parseInt(id))[0];

  return (
    <>
    <BlogNav></BlogNav>
    <h1 style={{marginBottom:'10px'}}>{blog.title}</h1>
    <h3 style={{color:'#000'}}>{blog.date}</h3>
    <br></br>
    {/* <div className="blogHtml" dangerouslySetInnerHTML={{ __html: blog.html }} /> */}

    <div className="blogHtml">
        <div className="gradient-background" style={{width:'90vw', height:'5px', borderRadius:'50px', margin:'auto'}}></div>
        <br></br>
        {/* <img src="/confetti-hotdog.png" style={{width:'40vw', minWidth:'200px'}}></img> */}
        {/* <div style={{ position: "relative" }}> */}
  <iframe
    src="https://player.vimeo.com/video/816224129?h=4853299384&badge=0&autopause=0&player_id=0&app_id=58479"
    frameBorder={0}
    allow="autoplay; fullscreen; picture-in-picture"
    allowFullScreen=""
    style={{
    //   position: "absolute",
    //   top: 0,
    //   left: 0,
      width: "80vw",
      height: "60vh",
      margin: '50px  auto'
    }}

    title="confetti tutorial"
  />
{/* </div> */}
        <p style={{textAlign:'left', width:'80vw', margin:'auto', minWidth:'200px'}}>
        Simple little confetti animation you can add to your Shopify store to run when someone adds an item to the cart. You do NOT need to know how to code, (but do it in a theme copy so you don't break something). If you want help adding this in, or modifying it a bit, just let me know. Cheers!
        </p>

        <h3 className="blogSub">Code for 'confetti.js':</h3>
        <div className="codeBlock">
        <CodeBlock
        text={`
var maxParticleCount = 150; //set max confetti coun
var particleSpeed = 2; //set the particle animation speed
var startConfetti; //call to start confetti animation
var stopConfetti; //call to stop adding confetti
var toggleConfetti; //call to start or stop the confetti animation depending on whether it's already running
var removeConfetti; //call to stop the confetti animation and remove all confetti immediately


(function() {
    startConfetti = startConfettiInner;
    stopConfetti = stopConfettiInner;
    toggleConfetti = toggleConfettiInner;
    removeConfetti = removeConfettiInner;
    var colors = ["DodgerBlue", "OliveDrab", "Gold", "Pink", "SlateBlue", "LightBlue", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson"]
    var streamingConfetti = false;
    var animationTimer = null;
    var particles = [];
    var waveAngle = 0;

    function resetParticle(particle, width, height) {
        particle.color = colors[(Math.random() * colors.length) | 0];
        particle.x = Math.random() * width;
        particle.y = Math.random() * height - height;
        particle.diameter = Math.random() * 10 + 5;
        particle.tilt = Math.random() * 10 - 10;
        particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
        particle.tiltAngle = 0;
        return particle;
    }


    function startConfettiInner() {
        var width = window.innerWidth;
        var height = window.innerHeight;
        window.requestAnimFrame = (function() {
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function(callback) {
                    return window.setTimeout(callback, 16.6666667);
                };
        })();
        var canvas = document.getElementById("confetti-canvas");
        if (canvas === null) {
            canvas = document.createElement("canvas");
            canvas.setAttribute("id", "confetti-canvas");
            canvas.setAttribute("style", "display:block;z-index:999999;pointer-events:none;position:fixed;");
            document.body.appendChild(canvas);
            canvas.width = width;
            canvas.height = height;
            window.addEventListener("resize", function() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }, true);
        }
        var context = canvas.getContext("2d");
        while (particles.length < maxParticleCount)
            particles.push(resetParticle({}, width, height));
        streamingConfetti = true;
        if (animationTimer === null) {
            (function runAnimation() {
                context.clearRect(0, 0, window.innerWidth, window.innerHeight);
                if (particles.length === 0)
                    animationTimer = null;
                else {
                    updateParticles();
                    drawParticles(context);
                    animationTimer = requestAnimFrame(runAnimation);
                }
            })();
        }
    }


    function stopConfettiInner() {
        streamingConfetti = false;
    }


    function removeConfettiInner() {
        stopConfetti();
        particles = [];
    }


    function toggleConfettiInner() {
        if (streamingConfetti)
            stopConfettiInner();
        else
            startConfettiInner();
    }


    function drawParticles(context) {
        var particle;
        var x;
        for (var i = 0; i < particles.length; i++) {
            particle = particles[i];
            context.beginPath();
            context.lineWidth = particle.diameter;
            context.strokeStyle = particle.color;
            x = particle.x + particle.tilt;
            context.moveTo(x + particle.diameter / 2, particle.y);
            context.lineTo(x, particle.y + particle.tilt + particle.diameter / 2);
            context.stroke();
        }
    }


    function updateParticles() {
        var width = window.innerWidth;
        var height = window.innerHeight;
        var particle;
        waveAngle += 0.01;
        for (var i = 0; i < particles.length; i++) {
            particle = particles[i];
            if (!streamingConfetti && particle.y < -15)
                particle.y = height + 100;
            else {
                particle.tiltAngle += particle.tiltAngleIncrement;
                particle.x += Math.sin(waveAngle);
                particle.y += (Math.cos(waveAngle) + particle.diameter + particleSpeed) * 0.5;
                particle.tilt = Math.sin(particle.tiltAngle) * 15;
            }
            if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
                if (streamingConfetti && particles.length <= maxParticleCount)
                    resetParticle(particle, width, height);
                else {
                    particles.splice(i, 1);
                    i--;
                }
            }
        }
    }
})();


document.querySelector('form[action="/cart/add"] button[type="submit"]').addEventListener('click', (e) => {
    startConfetti();
    setTimeout(stopConfetti, 2000);
})
        `}
        language={'javascript'}
        showLineNumbers={true}
        theme={dracula}
        />
        </div>
        <h3 className="blogSub">Code for 'theme.liquid':</h3>
        <div className="codeBlock">
        <CodeBlock
        text={`<script src="{{ 'confetti.js' | asset_url }}" defer="defer"></script>`}
        language={'javascript'}
        showLineNumbers={true}
        theme={dracula}
        />
        </div>

        <p style={{textAlign:'left', width:'80vw', margin:'auto', minWidth:'200px'}}>Have Fun!</p>
    </div>

    </>
  );
};

export default BlogPost;
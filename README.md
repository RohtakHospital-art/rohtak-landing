# rohtak-landing
Premium Landing Page for Rohtak Hospital with responsive design, lead generation form, WhatsApp integration, and modern UI.
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Rohtak Hospital | Advanced Healthcare</title>

<meta name="description" content="Rohtak Hospital provides trusted healthcare with experienced doctors, modern facilities and emergency care.">

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">

</head>

<body>

<!-- TOP BAR -->

<div class="top-bar">

<div class="container d-flex justify-content-between">

<div>

<i class="fa-solid fa-location-dot"></i>

Sukhpura Chowk, Rohtak

</div>

<div>

<a href="https://wa.me/919205657879">

<i class="fab fa-whatsapp"></i>

9205657879

</a>

</div>

</div>

</div>

<!-- NAVBAR -->

<nav class="navbar navbar-expand-lg bg-white shadow-sm sticky-top">

<div class="container">

<a class="navbar-brand fw-bold text-primary">

Rohtak Hospital

</a>

<button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">

<span class="navbar-toggler-icon"></span>

</button>

<div class="collapse navbar-collapse" id="menu">

<ul class="navbar-nav ms-auto">

<li class="nav-item"><a class="nav-link" href="#home">Home</a></li>

<li class="nav-item"><a class="nav-link" href="#about">About</a></li>

<li class="nav-item"><a class="nav-link" href="#services">Services</a></li>

<li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>

</ul>

<a href="#appointment" class="btn btn-primary ms-3">

Book Appointment

</a>

</div>

</div>

</nav>

<!-- HERO -->

<section id="home" class="hero">

<div class="overlay"></div>

<div class="container">

<div class="row align-items-center">

<div class="col-lg-6">

<h1>

Advanced Healthcare<br>

You Can Trust

</h1>

<p>

Expert Doctors • Modern Facilities • 24×7 Emergency Care

</p>

<div class="mt-4">

<a href="#appointment" class="btn btn-primary btn-lg">

Book Appointment

</a>

<a href="https://wa.me/919205657879"

class="btn btn-success btn-lg ms-2">

WhatsApp

</a>

</div>

</div>

<div class="col-lg-6 text-center">

<img src="images/hospital.png"

class="img-fluid rounded shadow-lg"

alt="Rohtak Hospital">

</div>

</div>

</div>

</section>

<!-- ABOUT -->

<section id="about" class="py-5">

<div class="container">

<div class="row align-items-center">

<div class="col-lg-6">

<img src="images/about.jpg"

class="img-fluid rounded">

</div>

<div class="col-lg-6">

<h2>

Welcome to Rohtak Hospital

</h2>

<p>

Rohtak Hospital is committed to providing quality healthcare with experienced doctors, advanced medical technology and compassionate patient care.

</p>

<ul>

<li>Experienced Doctors</li>

<li>24×7 Emergency</li>

<li>Modern Operation Theatre</li>

<li>Affordable Treatment</li>

<li>Patient First Approach</li>

</ul>

</div>

</div>

</div>

</section>
<!-- SERVICES -->

<section id="services" class="py-5 bg-light">

<div class="container">

<div class="text-center mb-5">

<h2>Our Medical Services</h2>

<p>Complete Healthcare Under One Roof</p>

</div>

<div class="row g-4">

<div class="col-md-4">
<div class="service-card">
<i class="fas fa-user-md"></i>
<h4>General Medicine</h4>
<p>Expert physicians providing quality healthcare.</p>
</div>
</div>

<div class="col-md-4">
<div class="service-card">
<i class="fas fa-heartbeat"></i>
<h4>Emergency Care</h4>
<p>24×7 emergency medical support.</p>
</div>
</div>

<div class="col-md-4">
<div class="service-card">
<i class="fas fa-procedures"></i>
<h4>General Surgery</h4>
<p>Modern operation theatre & surgical care.</p>
</div>
</div>

<div class="col-md-4">
<div class="service-card">
<i class="fas fa-baby"></i>
<h4>Pediatrics</h4>
<p>Complete child healthcare services.</p>
</div>
</div>

<div class="col-md-4">
<div class="service-card">
<i class="fas fa-female"></i>
<h4>Gynecology</h4>
<p>Women's healthcare by experienced specialists.</p>
</div>
</div>

<div class="col-md-4">
<div class="service-card">
<i class="fas fa-x-ray"></i>
<h4>Diagnostics</h4>
<p>Modern laboratory & diagnostic services.</p>
</div>
</div>

</div>

</div>

</section>

<!-- WHY CHOOSE US -->

<section class="py-5">

<div class="container">

<div class="row">

<div class="col-lg-6">

<h2>Why Choose Rohtak Hospital?</h2>

<ul class="list-group list-group-flush">

<li class="list-group-item">✔ Experienced Doctors</li>

<li class="list-group-item">✔ Advanced Medical Equipment</li>

<li class="list-group-item">✔ Affordable Treatment</li>

<li class="list-group-item">✔ 24×7 Emergency Care</li>

<li class="list-group-item">✔ Patient-Centered Care</li>

</ul>

</div>

<div class="col-lg-6">

<img src="images/why.jpg" class="img-fluid rounded shadow">

</div>

</div>

</div>

</section>

<!-- APPOINTMENT -->

<section id="appointment" class="py-5 bg-primary text-white">

<div class="container">

<div class="text-center mb-4">

<h2>Book Your Appointment</h2>

<p>Fill the form and our team will contact you shortly.</p>

</div>

<form class="row g-3">

<div class="col-md-6">

<input type="text" class="form-control" placeholder="Your Name">

</div>

<div class="col-md-6">

<input type="tel" class="form-control" placeholder="Mobile Number">

</div>

<div class="col-md-6">

<select class="form-select">

<option>Select Department</option>

<option>General Medicine</option>

<option>General Surgery</option>

<option>Gynecology</option>

<option>Pediatrics</option>

<option>Emergency</option>

</select>

</div>

<div class="col-md-6">

<input type="date" class="form-control">

</div>

<div class="col-12">

<textarea class="form-control" rows="4" placeholder="Message"></textarea>

</div>

<div class="col-12 text-center">

<button class="btn btn-warning btn-lg">

Book Appointment

</button>

</div>

</form>

</div>

</section>

<!-- CONTACT -->

<section id="contact" class="py-5">

<div class="container">

<div class="row">

<div class="col-lg-6">

<h2>Contact Us</h2>

<p><strong>Address:</strong> Sukhpura Chowk, Rohtak</p>

<p><strong>WhatsApp:</strong> 9205657879</p>

</div>

<div class="col-lg-6">

<a href="https://wa.me/919205657879" class="btn btn-success btn-lg">

Chat on WhatsApp

</a>

</div>

</div>

</div>

</section>

<!-- FOOTER -->

<footer class="bg-dark text-white text-center py-4">

<div class="container">

<h4>Rohtak Hospital</h4>

<p>Sukhpura Chowk, Rohtak</p>

<p>© 2026 Rohtak Hospital. All Rights Reserved.</p>

</div>

</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

<script src="script.js"></script>

</body>

</html>
<!-- COUNTER SECTION -->

<section class="counter-section py-5">

<div class="container">

<div class="row text-center">

<div class="col-md-3">
<h2 class="counter">15000+</h2>
<p>Happy Patients</p>
</div>

<div class="col-md-3">
<h2 class="counter">25+</h2>
<p>Expert Doctors</p>
</div>

<div class="col-md-3">
<h2 class="counter">15+</h2>
<p>Years Experience</p>
</div>

<div class="col-md-3">
<h2 class="counter">24×7</h2>
<p>Emergency Care</p>
</div>

</div>

</div>

</section>


<!-- PATIENT REVIEWS -->

<section class="py-5 bg-light">

<div class="container">

<div class="text-center mb-5">

<h2>Patient Reviews</h2>

<p>Trusted by Thousands of Patients</p>

</div>

<div class="row">

<div class="col-md-4">

<div class="review-card">

★★★★★

<p>

Very good doctors and excellent staff.

Highly recommended.

</p>

<h5>- Rahul Sharma</h5>

</div>

</div>

<div class="col-md-4">

<div class="review-card">

★★★★★

<p>

Affordable treatment and very clean hospital.

</p>

<h5>- Pooja Verma</h5>

</div>

</div>

<div class="col-md-4">

<div class="review-card">

★★★★★

<p>

Emergency services are excellent.

</p>

<h5>- Amit Kumar</h5>

</div>

</div>

</div>

</div>

</section>


<!-- FAQ -->

<section class="py-5">

<div class="container">

<div class="text-center mb-5">

<h2>Frequently Asked Questions</h2>

</div>

<div class="accordion" id="faq">

<div class="accordion-item">

<h2 class="accordion-header">

<button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#q1">

What are the OPD timings?

</button>

</h2>

<div id="q1" class="accordion-collapse collapse show">

<div class="accordion-body">

Please contact the hospital for current OPD timings.

</div>

</div>

</div>


<div class="accordion-item">

<h2 class="accordion-header">

<button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q2">

Do you provide emergency services?

</button>

</h2>

<div id="q2" class="accordion-collapse collapse">

<div class="accordion-body">

Yes, emergency services are available 24×7.

</div>

</div>

</div>


<div class="accordion-item">

<h2 class="accordion-header">

<button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q3">

How can I book an appointment?

</button>

</h2>

<div id="q3" class="accordion-collapse collapse">

<div class="accordion-body">

Book online or contact us on WhatsApp.

</div>

</div>

</div>

</div>

</div>

</section>



<!-- FLOATING WHATSAPP -->

<a href="https://wa.me/919205657879"

class="whatsapp-float"

target="_blank">

<i class="fab fa-whatsapp"></i>

</a>



<!-- BACK TO TOP -->

<button id="topBtn">

<i class="fas fa-arrow-up"></i>

</button>
.service-card{
background:#fff;
padding:30px;
border-radius:20px;
box-shadow:0 10px 25px rgba(0,0,0,.08);
transition:.4s;
text-align:center;
}

.service-card:hover{
transform:translateY(-10px);
}

.service-card i{
font-size:45px;
color:#0d6efd;
margin-bottom:20px;
}

.review-card{
background:#fff;
padding:25px;
border-radius:20px;
box-shadow:0 8px 20px rgba(0,0,0,.08);
text-align:center;
}

.counter-section{
background:#0d6efd;
color:#fff;
}

.counter{
font-size:50px;
font-weight:bold;
}

.whatsapp-float{
position:fixed;
bottom:25px;
right:25px;
width:65px;
height:65px;
background:#25D366;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
font-size:32px;
color:#fff;
text-decoration:none;
box-shadow:0 8px 20px rgba(0,0,0,.3);
z-index:9999;
}

#topBtn{
position:fixed;
left:25px;
bottom:25px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#0d6efd;
color:#fff;
display:none;
cursor:pointer;
}
Add a "Services Section" to the HTML with medical services offered?
Create a complete contact/appointment section?
Add more HTML sections for doctor profiles or testimonials?

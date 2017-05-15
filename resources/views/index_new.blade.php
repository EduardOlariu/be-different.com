<?php
/**
 * Created by PhpStorm.
 * User: eduardolariu
 * Date: 15/05/2017
 * Time: 13:32
 */?>
<?php
/**
 * Created by PhpStorm.
 * User: eduardolariu
 * Date: 22/02/2017
 * Time: 10:37
 */

?>
		<!DOCTYPE html>

<html lang="en">

<head>
	<meta charset=utf-8>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Be-Different</title>
	<!-- Load Roboto font -->

	<link rel="stylesheet" type="text/css" href="/bootstrap/css/bootstrap.min.css">
	<!-- Optional Bootstrap theme -->
	<link rel="stylesheet" href="/bootstrap/css/bootstrap-theme.min.css">
	<link rel="stylesheet" href="/css/styles.site.css">
	<link href='http://fonts.googleapis.com/css?family=Roboto:400,300,700&amp;subset=latin,latin-ext' rel='stylesheet' type='text/css'>
	<!-- Load css styles -->
	<link rel="stylesheet" type="text/css" href="design/css/bootstrap.css" />
	<link rel="stylesheet" type="text/css" href="design/css/bootstrap-responsive.css" />
	<link rel="stylesheet" type="text/css" href="design/css/style.css" />
	{{--<link rel="stylesheet" type="text/css" href="design/css/pluton.css" />--}}
    <!--[if IE 7]>
	<link rel="stylesheet" type="text/css" href="design/css/pluton-ie7.css" />
	<![endif]-->
	<link rel="stylesheet" type="text/css" href="design/css/jquery.cslider.css" />
	<link rel="stylesheet" type="text/css" href="design/css/jquery.bxslider.css" />
	<link rel="stylesheet" type="text/css" href="design/css/animate.css" />
	<!-- Fav and touch icons -->
	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="design/images/ico/apple-touch-icon-144.png">
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="design/images/ico/apple-touch-icon-114.png">
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="design/images/apple-touch-icon-72.png">
	<link rel="apple-touch-icon-precomposed" href="design/images/ico/apple-touch-icon-57.png">
	<link rel="shortcut icon" href="design/images/ico/favicon.ico">


	<link rel="shortcut icon" href="/css/styles.css">

	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
</head>

<body>
<nav class="navbar navbar-default">
	<div class="container">
		<!-- Brand and toggle get grouped for better mobile display -->
		<a href="#" class="brand">
			<img src="design/images/logo.png"  alt="Logo" />
			<!-- This is website logo -->
		</a>

		<!-- Collect the nav links, forms, and other content for toggling -->
		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			<ul class="nav navbar-nav navbar-right" id="top-navigation">




				<li class="active"><a href="#home">Home</a></li>
				<li><a href="#Benefits">Benefits</a></li>
				<!--<li><a href="#portfolio">Portofoliu</a></li>
				<li><a href="#about">Despre noi</a></li>
				<li><a href="#clients">Clienti</a></li>
				<li><a href="#contact">Contact</a></li>-->


				{{--<ul class="dropdown-menu">--}}
				{{--<li><a href="#">Action</a></li>--}}
				{{--<li><a href="#">Another action</a></li>--}}
				{{--<li><a href="#">Something else here</a></li>--}}
				{{--<li role="separator" class="divider"></li>--}}
				{{--<li><a href="#">Separated link</a></li>--}}
				{{--</ul>--}}

			</ul>
		</div><!-- /.navbar-collapse -->
	</div><!-- /.container-fluid -->
</nav>



{{--<div class="navbar">--}}
{{--<div class="navbar-inner">--}}
{{--<div class="container">--}}
{{--<a href="#" class="brand">--}}
{{--<img src="design/images/logo.png" width="120"  alt="Logo" />--}}
{{--<!-- This is website logo -->--}}
{{--</a>--}}
{{--<!-- Navigation button, visible on small resolution -->--}}
{{--<button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">--}}
{{--<i class="icon-menu"></i>--}}
{{--</button>--}}
{{--<!-- Main navigation -->--}}
{{--<div class="nav-collapse collapse pull-right">--}}
{{--<ul class="nav" id="top-navigation">--}}
{{--<li class="active"><a href="#home">Home</a></li>--}}
{{--<li><a href="#Benefits">Benefits</a></li>--}}
{{--<!--<li><a href="#portfolio">Portofoliu</a></li>--}}
{{--<li><a href="#about">Despre noi</a></li>--}}
{{--<li><a href="#clients">Clienti</a></li>--}}
{{--<li><a href="#contact">Contact</a></li>-->--}}
{{--</ul>--}}
{{--</div>--}}
{{--<!-- End main navigation -->--}}
{{--</div>--}}
{{--</div>--}}
{{--</div>--}}

@if ($flash=session('message'))

	<div class="alert alert-success col-md-12" id="flash_message" role="alert" style="">

		{{$flash}}



	</div>
@endif
@if ($flash=session('success'))

	<div class="alert alert-success col-md-12" id="flash_message" role="alert" style="">

		{{$flash}}



	</div>
@endif
@if ($flash=session('error'))

	<div class="alert alert-error col-md-12" id="flash_message" role="alert" style="">

		{{$flash}}



	</div>
@endif



	<!-- Start home section -->
	<div id="home">
		<!-- Start cSlider -->
		<div id="da-slider" class="da-slider">
		{{--<div class="triangle"></div>--}}
		<!-- mask elemet use for masking background image -->
			<div class="mask"></div>
			<!-- All slides centred in container element -->
			<div class="container">
				<!-- Start first slide -->
				<div class="da-slide">
					<h2 class="fittext2">BE PART OF THE COMMUNITY THAT</h2>
					<h2 class="fittext3" style="">BRINGS THE CHANGE TO THE WORLD</h2>

					<h4 style="" class="fittext4">Embrace the diversity</h4>
					{{--<a href="#subscribe"><button class="button da-img" >Apply for membership</button></a>--}}
					{{--<p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.</p>--}}
					{{--<a href="#" class="da-link button">Citeste mai multe</a>--}}
					<div class="da-img">
						{{--<img src="design/images/slider23.png" alt="image01" width="320">--}}
					</div>
				</div>
				<!-- End first slide -->
				<!-- Start second slide -->
				<div class="da-slide">
					<h2 class="fittext2">BE PART OF THE COMMUNITY THAT</h2>
					<h2 class="fittext3" style="">BRINGS THE CHANGE TO THE WORLD</h2>

					<h4 style="" class="fittext4">MAKE THE DIFFERENCE</h4>
					{{--<a href="#subscribe"><button class="button da-img" >Apply for membership</button></a>--}}
					{{--<h4>Clean & responsive</h4>--}}
					{{--<p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.</p>--}}
					{{--<a href="#" class="da-link button">Citeste mai multe</a>--}}
					<div class="da-img">

						{{--<img src="design/images/slider23.png" alt="image01" width="320">--}}
					</div>
				</div>
				<!-- End second slide -->
				<!-- Start third slide -->
				<div class="da-slide">
					<h2 class="fittext2">BE PART OF THE COMMUNITY THAT</h2>
					<h2 class="fittext3" style="">BRINGS THE CHANGE TO THE WORLD</h2>

					<h4 style="" class="fittext4">FREE MEMBERSHIP FOR THE FIRST 100 APPLICATIONS</h4>
					{{--<a href="#subscribe"><button class="button da-img" >Apply for membership</button></a>--}}

					<div class="da-img">

					</div>
				</div>
				<!-- Start third slide -->
				<!-- Start cSlide navigation arrows -->
				<div class="da-arrows">
					<span class="da-arrows-prev"></span>
					<span class="da-arrows-next"></span>
				</div>
				<!-- End cSlide navigation arrows -->
			</div>
		</div>
	</div>
	<!-- End home section -->
	<!-- Service section start -->
	<div class="section primary-section" id="Benefits">
		<div class="container">

			<div class="title col-xs-12 col-sm-12 col-md-12">
				<h1>About</h1>
				<p>Be Different is the community where you find inspiration for creating your own story of success,
				   passion for excellence and become a partner in building a better world.</br></br>Our members purpose
				   consist in the disire to improve the quality of life through personal development.</br>Different
				   Business have the role to create and maintenance the balance in the world based on values and
				   ethical principles.</br>Together we act and work with the same values through mutual sustaining and
				   help.</p>
			</div>
			<div class="row-fluid">
				<div class="col-xs-12 col-sm-12 col-md-4" id="first-person">
					<div class="centered service col-md-12 col-sm-12 col-xs-12">
						<div class="circle-border zoom-in thumbnail">
							<img class="img-circle" src="design/images/Different/different1.jpg" alt="service 1">
							{{--<div class="mask">--}}
							{{--<h2 style="padding-top: 75px;">Change starts </br>with us.</br>Start today!</h2>--}}
							{{--</div>--}}
						</div>
						<h3>Different People</h3>
						<p>The change starts from within.</br>Inspire others with your own definition of success.</br>
						   Meet passionate people sharing similar values and aspirations. </br>Build a powerful
						   personal brand and find your support for growing.</p>
					</div>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-4" id="second-person">
					<div class="centered service col-md-12 col-sm-12 col-xs-12">
						<div class="circle-border zoom-in thumbnail">
							<img class="img-circle" src="design/images/Different/different2.jpg" alt="service 1">
							{{--<div class="mask">--}}
							{{--<h2 style="padding-top: 75px;">Build  a better business </br>for a better life!</h2>--}}
							{{--</div>--}}
						</div>
						<h3>Different Business</h3>
						<p>Embrace diversity and express your uniqueness through ethics.</br>Meet an International
						   network of businesses that have a real contribution for the planet.</br>Enjoy the benefits
						   from the Different Business and create quality partnerships.</br>Gain global recognition of
						   making a difference.</p>
					</div>
				</div>
				<div class="col-xs-12 col-sm-12  col-md-4" id="third-person">
					<div class="centered service col-md-12 col-sm-12 col-xs-12">
						<div class="circle-border zoom-in thumbnail ">
							<img class="img-circle" src="design/images/Different/different3.jpg" alt="service 1">
							{{--<div class="mask">--}}
							{{--<h2 style="padding-top: 75px;">Be different </br>for a different </br>world!</h2>--}}
							{{--</div>--}}
						</div>
						<h3>Different World</h3>
						<p>Make time for things that matter.</br>Let's increase awareness of scarce resources and
						   contribute in creating a sustainable environment.</br>Become a pioneer in finding new ways
						   to make a difference in the world.</br>Meet passionate professionals who care for your
						   cause.</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Price section end -->
	<!-- Newsletter section start -->
	<div class="section third-section1">
		<!--<div class="triangle"></div>-->
		<div class="container newsletter">
			<div class="sub-section">
				<div class="title clearfix col-md-12">
					<div style="">
						<h3>INTERNATIONAL MEMBERSHIP SYSTEM </br>THAT RECOGNIZES PERSONAL, BUSINESS</br> AND NON-PROFIT
						    ORGANIZATIONS</br> CONTRIBUTION FOR A BETTER WORLD.</h3>


						<h3 style="letter-spacing: 8px;font-weight: 700;margin-top:8%"> SAME VALUES IN THE SAME
						                                                                PLACE </br>CHANGE THE WORLD</h3>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="section third-section2">
		<div class="container newsletter media-top">
			<div class="row-fluid">
				<div class="col-md-5 col-sm-5 col-xs-12">
					<p style="color:#C1C1C1">Contact</p>
					{{--<p style="color:#0e0e0e; background-color:rgba(193, 193, 193,0.9); margin-right:40px;">For more information please contact us!</br></br>Email: <a href="mailto:info@be-different.com">info@be-different.com</a></br></br></p>--}}
					<p style="color:#C1C1C1">MEMBERSHIP</p>
					<p style="color: #C1C1C1; font-size:14px; margin-top:-20px;"><i>Your Contribution for a Different
					                                                                Word.</i></p>
					<p style="color:#0e0e0e; background-color:#c1c1c1; margin-right:40px;">Membership requires a
					                                                                       specific background. Its a privat community and a Different Business network. The Membership
					                                                                       Applications will be approved by our international Foundation Be Different Committee. All the
					                                                                       information will be send to you by e mail upon registration. The annual membership fee represent
					                                                                       a donation for the Be Different Foundation. Members will receive an Enrollment Pack.</p>
				</div>
				<div class="col-md-7 col-sm-7 col-xs-12" style="margin-top: 65px;">

					<p style="color:#fff; text-align: center; letter-spacing: 2px;"><b>APPLY FOR MEMBERSHIP</b></p>
					{{--<form method="POST" action="http://www.be-different.com/subscribe" accept-charset="UTF-8" class="inline-form">--}}
					{!! Form::open(array('route' => 'mail','class' =>'inline-form')) !!}
					<input type="email" name="email" id="" class="span8" placeholder="Email address" required/>
					<button id="" class="button">Join us!</button>
					{!! Form::close() !!}

					{{--{!! Form::open(array('route' => 'subscribe','class' =>'inline-form')) !!}--}}


					{{--<input class="form-control span8" name="email" id="email" type="email" placeholder="Your Email" required>--}}

					{{--<button id="subscribe" class="button btn btn-info btn-lg" type="submit">Join us!</button>--}}

					{{--{!! Form::close() !!}--}}
					{{--<div id="err-subscribe" class="error centered">Please provide valid email address.</div>--}}
				</div>
			</div>
		</div>
	</div>
	<!-- Newsletter section end -->
	<!-- Formular de contact start -->
	<!--<div id="contact" class="contact">
            <div class="section secondary-section-contact">
                <div class="container">
                    <div class="title">
                        <h1>Contacteaza-ne!</h1>
                        <p>Esti pregatit sa ajungi in fata competitiei? Spune-ne ce idee ai si noi te vom ajuta sa devii primul in nisa ta.</p>
                    </div>
                </div>
                <div class="map-wrapper">
    				<div class="map-canvas" id="map-canvas">Incarcare harta...</div>
                    <div class="container">
                        <div class="row-fluid col">
                            <div class="span5 contact-form centered">
                                <h3>Spune-ne ideea ta!</h3>
                                <div id="successSend" class="alert alert-success invisible">
                                    Mesajul tau a fost trimis cu succes! Te contactam in cel mai scurt timp.</div>
                                <div id="errorSend" class="alert alert-error invisible">A aparut o eroare. Incearca din nou.</div>

                                <form id="contact-form" action="php/mail.php">
                                    <div class="control-group">
                                        <div class="controls">
                                            <input class="span12" type="text" id="name" name="name" placeholder="* Nume..." />
                                            <div class="error left-align" id="err-name">Introdu numele!</div>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="controls">
                                            <input class="span12" type="email" name="email" id="email" placeholder="* Adresa de email..." />
                                            <div class="error left-align" id="err-email">Introdu o adresa de email valida!</div>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="controls">
                                            <textarea class="span12" name="comment" id="comment" placeholder="* Ideea ta..."></textarea>
                                            <div class="error left-align" id="err-comment">Oops! Ai uitat sa ne scrii ideea.</div>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="controls">
                                            <button id="send-mail" class="message-btn">Trimite</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="container contact-padding">
                                <div class="span9 center contact-info ">
                                    <p style="color: #0092ff">Strada Lainici, Nr. 22, Sector 1, Bucuresti</p>
                                    <p class="info-mail" style="color: #0092ff">office@aiteh.eu</p>
                                    <p style="color: #0092ff">0722 NOI DOI</p>
                                    <p style="color: #0092ff">0722 NOI DOI</p>
                                    <div class="title">
                                        <h3>Ne gasesti si in mediul online!</h3>
                                    </div>
                                </div>
                                <div class="row-fluid centered">
                                    <ul class="social">
                                        <li>
                                            <a href="">
                                                <span class="icon-facebook-circled"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span class="icon-twitter-circled"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span class="icon-linkedin-circled"></span>
                                            </a>
                                        </li>
                                        <li>
                                         <a href="">
                                                <span class="icon-pinterest-circled"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span class="icon-dribbble-circled"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span class="icon-gplus-circled"></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                    </div>
                </div>

            </div>
        </div>-->
	<!-- Formular de contact inchis -->

	<!-- ScrollUp button end -->
	<!-- Include javascript -->
<script src="design/js/jquery.js"></script>
<script type="text/javascript" src="design/js/jquery.mixitup.js"></script>
<script type="text/javascript" src="design/js/bootstrap.js"></script>
<script type="text/javascript" src="design/js/modernizr.custom.js"></script>
<script type="text/javascript" src="design/js/jquery.bxslider.js"></script>
<script type="text/javascript" src="design/js/jquery.cslider.js"></script>
{{--<script type="text/javascript" src="design/js/jquery.placeholder.js"></script>--}}
{{--<script type="text/javascript" src="design/js/jquery.inview.js"></script>--}}
<!-- Load google maps api and call initializeMap function defined in app.js -->

	<!-- css3-mediaqueries.js for IE8 or older -->
	<!--[if lt IE 9]>
<script src="design/js/respond.min.js"></script>
	<![endif]-->
<script src="js/js.js"></script>
<script type="text/javascript" src="design/js/app.js"></script>
</body>
</html>
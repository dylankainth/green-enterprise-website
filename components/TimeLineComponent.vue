<template>
    <section class="experience pt-100 pb-100" id="experience">
		<div class="container">
			<div class="row">
				<div class="col-xl-8 mx-auto text-center">
					<div class="section-title">
						<h1 class="display-5 fw-bold overflow-hidden text-specialgreen">Competiton Timeline</h1>
					</div>
				</div>
			</div>
			<div class="row">
               <div class="col-xl-12">
                  <ul class="timeline-list">
                     <!-- Single Experience -->
                     <li>
                        <div class="timeline_content">
                           <span>October 19th</span>
                           <h4>Enter the competition</h4>
                           <p>Organise your team and sign up by October 19th. However, you will still be accepted if you join late. </p>
                        </div>
                     </li>
                     <!-- Single Experience -->
                     <li>
                        <div class="timeline_content">
                        
                           <h4>Milestones</h4>
                           <p>Periodically, you will receive content on entrepreneurship to participants with useful content to keep you on track.</p>
                        </div>
                     </li>
                     <!-- Single Experience -->
                     <li>
                        <div class="timeline_content">
                        <span>March 18th</span>
                           <h4>Submission Deadline</h4>
                           <p>Submit your video and pitch deck by March 18th. We will review and give feedback to four entries per school.</p>
                        </div>
                     </li>
                     <!-- Single Experience -->
                     <li>
                        <div class="timeline_content">
                        <span>April</span>
                           <h4>Awards Showcase</h4>
                           <p>Once the review process is over, there will be a showcase where the winners of each category will be announced.</p>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
		</div>
	  </section>
</template>

<style scoped>

h4 {
    overflow: hidden;
    color: #4B9354
}
.text-specialgreen{
    color:  #4B9354
}
.pt-100{
    padding-top:100px;
}
.pb-100{
    padding-bottom:100px;
}
.section-title {
  margin-bottom: 60px;
}
.section-title p {
	color: #777;
	font-size: 16px;
}
.section-title h4 {
	text-transform: capitalize;
	font-size: 40px;
	position: relative;
	padding-bottom: 20px;
	margin-bottom: 20px;
	font-weight: 600;
}

ul.timeline-list {
	position: relative;
	margin: 0;
	padding: 0
}
ul.timeline-list:before {
	position: absolute;
	content: "";
	width: 2px;
	height: 100%;
	background-color: #4B9354;
	left: 50%;
	top: 0;
	-webkit-transform: translateX(-50%);
	        transform: translateX(-50%);
}
ul.timeline-list li {
	position: relative;
	clear: both;
	display: table;
}
.timeline_content {
	border: 2px solid #4B9354;
	background-color:#fff;
}

.timeline_content p {
	color: #4B9354;
    font-size: 1.75rem;
}

ul.timeline-list li .timeline_content {
	width: 45%;
	color: #333;
	padding: 30px;
	float: left;
	text-align: right;
}
ul.timeline-list li:nth-child(2n) .timeline_content {
	float: right;
	text-align: left;
}
.timeline_content h4 {
	font-size: 2rem;
	font-weight: bold;
	margin: 10px 0;
}
ul.timeline-list li:before {
	position: absolute;
	content: "";
	width: 25px;
	height: 25px;
	background-color: #4B9354;
	left: 50%;
	top: 50%;
	-webkit-transform: translate(-50%, -50%);
	        transform: translate(-50%, -50%);
	border-radius: 50%;
}
.timeline_content span {
	font-size: 18px;
	font-weight: 500;
	font-family: poppins;
	color: #4B9354;
}

.experience{
    background-color: white;
}

</style>
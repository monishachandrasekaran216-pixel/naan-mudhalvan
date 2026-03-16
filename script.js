<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Event Registration Page</title>

<style>

body{
    font-family: Arial, sans-serif;
    background:#f0f2f5;
    margin:0;
    padding:0;
}

.container{
    width:80%;
    margin:auto;
    background:white;
    padding:30px;
}

h1,h2{
    text-align:center;
}

.event-info{
    background:#eef3ff;
    padding:15px;
    border-left:5px solid #3a6cf4;
    margin-bottom:20px;
}

form{
    background:#fafafa;
    padding:20px;
    border-radius:8px;
    box-shadow:0 2px 8px rgba(0,0,0,0.1);
}

table{
    width:100%;
    border-collapse:collapse;
}

td{
    padding:10px;
}

input,select,textarea{
    width:100%;
    padding:8px;
    border:1px solid #ccc;
    border-radius:5px;
}

input[type=radio]{
    width:auto;
}

button{
    padding:10px 18px;
    border:none;
    border-radius:5px;
    background:#3a6cf4;
    color:white;
    cursor:pointer;
}

button:hover{
    background:#244ec9;
}

.reset{
    background:#999;
}

.reset:hover{
    background:#777;
}

.participants{
    margin-top:30px;
}

.participants th{
    background:#3a6cf4;
    color:white;
}

.participants tr:nth-child(even){
    background:#f2f2f2;
}

.participants th,
.participants td{
    padding:10px;
    border:1px solid #ddd;
}

footer{
    text-align:center;
    margin-top:30px;
    padding:15px;
    background:#222;
    color:white;
}

</style>
</head>

<body>

<div class="container">

<h1>Event Registration</h1>

<div class="event-info">
<h3>Web Development Workshop</h3>
<p>
Join our interactive workshop to learn the basics of HTML, CSS and JavaScript.
Participants will build a simple webpage and understand front-end development.
</p>
</div>

<h2>Registration Form</h2>

<form>

<table>

<tr>
<td>Name</td>
<td><input type="text" required></td>
</tr>

<tr>
<td>Email</td>
<td><input type="email"></td>
</tr>

<tr>
<td>Phone</td>
<td><input type="tel"></td>
</tr>

<tr>
<td>Date of Birth</td>
<td><input type="date"></td>
</tr>

<tr>
<td>Gender</td>
<td>
<input type="radio" name="gender"> Male
<input type="radio" name="gender"> Female
</td>
</tr>

<tr>
<td>Select Event</td>
<td>
<select>
<option>Web Development Workshop</option>
<option>AI Seminar</option>
<option>Hackathon</option>
</select>
</td>
</tr>

<tr>
<td>Mode</td>
<td>
<input type="radio" name="mode"> Online
<input type="radio" name="mode"> Offline
</td>
</tr>

<tr>
<td>Message</td>
<td><textarea rows="3"></textarea></td>
</tr>

<tr>
<td colspan="2" align="center">
<button type="submit">Submit</button>
<button type="reset" class="reset">Reset</button>
</td>
</tr>

</table>

</form>

<div class="participants">

<h2>Registered Participants</h2>

<table>

<tr>
<th>Name</th>
<th>Email</th>
<th>Phone</th>
<th>Event</th>
<th>Mode</th>
</tr>

<tr>
<td>Monisha</td>
<td>monisha@email.com</td>
<td>9876543210</td>
<td>Web Development Workshop</td>
<td>Offline</td>
</tr>

<tr>
<td>Rahul</td>
<td>rahul@email.com</td>
<td>9876541230</td>
<td>AI Seminar</td>
<td>Online</td>
</tr>

</table>

</div>

<footer>

Contact Email: events@abccollege.edu <br>
Help Desk: +91 94444 12345 <br>
Support Timing: 9:00 AM – 4:30 PM

</footer>

</div>

</body>
</html>

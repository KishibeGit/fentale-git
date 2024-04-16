export const form = `<div id = "form-container">
<section id = "form">


<h1>Book a Table</h1>

<form>
    
    <div>
        <label for="booking_date">Date:</label>
        <input type="date" id="booking_date" name="booking_date" required>   
    </div>
    <div>
        <label for="booking_time">Time:</label>
        <input type="time" id="booking_time" name="booking_time" required>   
    </div>
    <div>
        <label for="people">Guests </label>
        <input type="number" id="people" min="1" max="8" name="people" required>        
    </div>
    <div id = "radio">
        <label>
            <input type="radio" id="agree" name="place" required checked> 
            Indoor
        </label>
        <label>
            <input type="radio" id="agree" name="place" required> 
            Outdoor
        </label>
    </div>
    <div>
        <input type="email" id="email_address" name="email_address" placeholder="Enter your email" required>
    </div>
    <button type="submit">Book Now</button>
    </form>
</section>
</div>`;



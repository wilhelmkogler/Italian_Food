function Restaurant() {
    return (
      <section className="py-10 px-32 lg:py-10 lg:px-4 max-w-6xl mx-auto font-nicer">
        <h2 className="text-5xl text-white font-bold text-center mb-12">Restaurant</h2>
  
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Bal oldal - infók */}
          <div className="flex-1 text-white">

            <h3 className="text-2xl font-semibold mb-6">Location</h3>
            <p className="mb-4">412 N Fairfax Ave, Los Angeles, CA 90036</p>

            <h3 className="text-2xl font-semibold mt-10 mb-6">Opening Hours</h3>
            <p className="mb-4">Monday - Friday: 11:00 - 22:00</p>
            <p className="mb-4">Saturday - Sunday: 12:00 - 23:00</p>
  
            <h3 className="text-2xl font-semibold mb-6 mt-10">Contact</h3>
            <p className="mb-4">Phone: +1 (323) 334-3369</p>
            <p className="mb-4">Email: info@italy.com</p>
  
            
          </div>
  
          {/* Jobb oldal - Google Maps */}
          <div className="flex-1">
            <iframe
              className="w-full h-[400px] rounded-2xl shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.154634234225!2d-118.361404684782!3d34.07737038059637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b8c9f9b1b1b1%3A0x1a2b3c4d5e6f7g8h!2sJon%20%26%20Vinny's%20Fairfax!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </section>
    );
  }
  
  export default Restaurant;
  
import React, { useState, FormEvent } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 3000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-terminal-gray3 relative z-0">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-green to-transparent"></div>
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-terminal-white mb-2">
            <span className="text-terminal-gray5">~/</span>contact
          </h2>
          <div className="w-20 h-1 bg-terminal-gray5"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side - Contact info */}
          <div className="animate-slide-up">
            {/* Direct contact */}
            <div className="card mb-6">
              <h3 className="flex items-center text-lg font-bold text-terminal-white mb-4">
                <span className="text-terminal-gray5 mr-2">{'>'}</span>
                Direct Contact
              </h3>
              <div className="space-y-4 text-sm">
                <a
                  href="mailto:ankitha.karyam.work@gmail.com"
                  className="block text-terminal-gray8 hover:text-terminal-white transition-colors"
                >
                  <span className="text-terminal-gray5"> > </span>
                  ankitha.karyam.work@gmail.com
                </a>
                <a
                  href="tel:+918074543716"
                  className="block text-terminal-gray8 hover:text-terminal-white transition-colors"
                >
                  <span className="text-terminal-gray5"> > </span>
                  +91 8074543716
                </a>
                <p className="block text-terminal-gray8">
                  <span className="text-terminal-gray5"> > </span>
                  Bangalore, Karnataka, India
                </p>
              </div>
            </div>

            {/* Social links */}
            <div className="card">
              <h3 className="flex items-center text-lg font-bold text-terminal-white mb-4">
                <span className="text-terminal-gray5 mr-2">{'>'}</span>
                Connect
              </h3>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-terminal-gray8 hover:text-terminal-white transition-colors text-sm"
                >
                  <span className="text-terminal-gray5">→ </span>
                  LinkedIn Profile
                </a>
                <a
                  href="#"
                  className="block text-terminal-gray8 hover:text-terminal-white transition-colors text-sm"
                >
                  <span className="text-terminal-gray5">→ </span>
                  GitHub Repository
                </a>
                <a
                  href="#"
                  className="block text-terminal-gray8 hover:text-terminal-white transition-colors text-sm"
                >
                  <span className="text-terminal-gray5">→ </span>
                  Resume/CV
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="card">
              <h3 className="flex items-center text-lg font-bold text-terminal-white mb-6">
                <span className="text-terminal-gray5 mr-2">{'>'}</span>
                Send Message
              </h3>

              {submitted ? (
                <div className="py-8 px-4 text-center border border-terminal-gray4 bg-terminal-gray1 rounded">
                  <p className="text-terminal-gray7 text-sm mb-2">✓ Message received!</p>
                  <p className="text-terminal-gray6 text-xs">
                    I&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs text-terminal-gray6 uppercase tracking-widest mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full border-accent-blue focus:border-accent-cyan"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs text-terminal-gray6 uppercase tracking-widest mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full border-accent-blue focus:border-accent-cyan"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs text-terminal-gray6 uppercase tracking-widest mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      rows={5}
                      className="w-full border-accent-purple focus:border-accent-cyan"
                      required
                    ></textarea>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-dark w-full text-xs uppercase tracking-widest disabled:opacity-50 hover:shadow-lg transition-all"
                    style={{ boxShadow: 'inset 0 0 20px rgba(0, 212, 255, 0.2)' }}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Availability status */}
        <div className="mt-12 flex items-center justify-center space-x-2 text-sm text-terminal-gray7 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <span className="w-2 h-2 bg-terminal-gray7 rounded-full animate-pulse"></span>
          <span>Available for freelance and full-time opportunities</span>
        </div>
      </div>
    </section>
  )
}

export default Contact

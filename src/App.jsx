import { useState, useEffect } from 'react'
import { 
  ShoppingCart, 
  Zap, 
  Shield, 
  Clock, 
  Star, 
  Users, 
  TrendingUp, 
  Check, 
  X,
  Menu,
  ChevronRight,
  Gift,
  CreditCard,
  Wallet,
  Sparkles,
  Award,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowRight,
  Package,
  Headphones,
  Globe,
  Lock,
  Heart
} from 'lucide-react'

function App() {
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [username, setUsername] = useState('')
  const [showCart, setShowCart] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const packages = [
    { id: 1, robux: 400, price: 4.99, popular: false, discount: null },
    { id: 2, robux: 800, price: 9.99, popular: true, discount: 10 },
    { id: 3, robux: 1700, price: 19.99, popular: false, discount: 15 },
    { id: 4, robux: 4500, price: 49.99, popular: false, discount: 20 },
    { id: 5, robux: 10000, price: 99.99, popular: false, discount: 25 },
    { id: 6, robux: 22500, price: 199.99, popular: false, discount: 30 },
  ]

  const features = [
    { icon: <Zap className="w-8 h-8" />, title: 'Instant Delivery', desc: 'Get your Robux within seconds after payment confirmation' },
    { icon: <Shield className="w-8 h-8" />, title: 'Secure Payment', desc: '256-bit SSL encryption for all transactions' },
    { icon: <Clock className="w-8 h-8" />, title: '24/7 Support', desc: 'Our support team is always ready to help you' },
    { icon: <Gift className="w-8 h-8" />, title: 'Bonus Rewards', desc: 'Earn extra Robux with our loyalty program' },
  ]

  const stats = [
    { number: '500K+', label: 'Happy Customers' },
    { number: '10M+', label: 'Robux Delivered' },
    { number: '99.9%', label: 'Success Rate' },
    { number: '4.9/5', label: 'User Rating' },
  ]

  const reviews = [
    { name: 'Alex Johnson', rating: 5, comment: 'Fast delivery! Got my Robux in less than 2 minutes. Highly recommend KuBlox!', avatar: '👨', date: '2 days ago' },
    { name: 'Sarah Miller', rating: 5, comment: 'Best service ever! Customer support is amazing and prices are competitive.', avatar: '👩', date: '1 week ago' },
    { name: 'Mike Chen', rating: 5, comment: 'Been using KuBlox for months now. Never had any issues. 100% legit!', avatar: '👱', date: '3 days ago' },
    { name: 'Emma Davis', rating: 4, comment: 'Great experience overall. The bonus rewards program is a nice touch!', avatar: '👧', date: '5 days ago' },
  ]

  const paymentMethods = [
    { name: 'Credit Card', icon: <CreditCard /> },
    { name: 'PayPal', icon: <Wallet /> },
    { name: 'Cryptocurrency', icon: <TrendingUp /> },
    { name: 'Gift Cards', icon: <Gift /> },
  ]

  const addToCart = (pkg) => {
    if (!username.trim()) {
      alert('Please enter your Roblox username first!')
      return
    }
    setCartItems([...cartItems, { ...pkg, username }])
    setShowCart(true)
  }

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index))
  }

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="min-h-screen relative">
      {/* Animated Background */}
      <div className="animated-bg"></div>
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark/95 backdrop-blur-lg shadow-2xl' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center glow-box">
                <Sparkles className="w-7 h-7 text-white animate-pulse" />
              </div>
              <h1 className="text-3xl font-display font-bold text-white glow-text">KuBlox</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-primary transition-colors font-medium">Home</a>
              <a href="#packages" className="text-white hover:text-primary transition-colors font-medium">Packages</a>
              <a href="#features" className="text-white hover:text-primary transition-colors font-medium">Features</a>
              <a href="#reviews" className="text-white hover:text-primary transition-colors font-medium">Reviews</a>
              <a href="#contact" className="text-white hover:text-primary transition-colors font-medium">Contact</a>
              <button 
                onClick={() => setShowCart(!showCart)}
                className="relative bg-primary hover:bg-secondary text-white px-6 py-2 rounded-full transition-all shine flex items-center space-x-2"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center animate-pulse">
                    {cartItems.length}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenu(!mobileMenu)}
              className="md:hidden text-white"
            >
              {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenu && (
            <div className="md:hidden mt-4 bg-dark/95 rounded-lg p-4 animate-slide-up">
              <a href="#home" className="block text-white hover:text-primary py-2">Home</a>
              <a href="#packages" className="block text-white hover:text-primary py-2">Packages</a>
              <a href="#features" className="block text-white hover:text-primary py-2">Features</a>
              <a href="#reviews" className="block text-white hover:text-primary py-2">Reviews</a>
              <a href="#contact" className="block text-white hover:text-primary py-2">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6 animate-fade-in">
              <div className="inline-block bg-primary/20 border border-primary/50 rounded-full px-4 py-2 text-sm text-primary font-semibold">
                🔥 TRUSTED BY 500K+ PLAYERS
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
                Top-Up Your <span className="text-primary glow-text">Robux</span> Instantly
              </h1>
              <p className="text-xl text-gray-300">
                The fastest, safest, and most reliable way to get Robux for your Roblox account. 
                Join thousands of satisfied players worldwide!
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#packages" className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shine inline-flex items-center space-x-2">
                  <span>Get Started Now</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <button className="bg-white/10 backdrop-blur-lg text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all border border-white/20">
                  Learn More
                </button>
              </div>
              
              {/* Trust Badges */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-green-400" />
                  <span className="text-sm">SSL Secured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Lock className="w-6 h-6 text-blue-400" />
                  <span className="text-sm">Safe Payment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-yellow-400" />
                  <span className="text-sm">Verified Seller</span>
                </div>
              </div>
            </div>

            <div className="relative animate-float">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-lg rounded-3xl p-8 border border-white/10 glow-box">
                <div className="text-center mb-6">
                  <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                    LIMITED TIME OFFER
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">Get Up to 30% Bonus</h3>
                  <p className="text-gray-300">On all packages above $99</p>
                </div>
                
                <div className="bg-dark/50 rounded-2xl p-6 space-y-4">
                  <div className="flex justify-between items-center text-white">
                    <span className="flex items-center space-x-2">
                      <Package className="w-5 h-5 text-primary" />
                      <span>Instant Delivery</span>
                    </span>
                    <Check className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex justify-between items-center text-white">
                    <span className="flex items-center space-x-2">
                      <Headphones className="w-5 h-5 text-primary" />
                      <span>24/7 Support</span>
                    </span>
                    <Check className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex justify-between items-center text-white">
                    <span className="flex items-center space-x-2">
                      <Globe className="w-5 h-5 text-primary" />
                      <span>Worldwide Service</span>
                    </span>
                    <Check className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex justify-between items-center text-white">
                    <span className="flex items-center space-x-2">
                      <Heart className="w-5 h-5 text-primary" />
                      <span>Loyalty Rewards</span>
                    </span>
                    <Check className="w-5 h-5 text-green-400" />
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-gray-400 text-sm mb-2">Trusted payment methods</p>
                  <div className="flex justify-center space-x-4">
                    {paymentMethods.map((method, index) => (
                      <div key={index} className="bg-white/10 p-3 rounded-lg">
                        {method.icon}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-dark/30 backdrop-blur-lg">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Why Choose <span className="text-primary">KuBlox?</span></h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the best Robux top-up service with unmatched features and benefits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all hover:scale-105 group animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 px-4 grid-pattern">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Choose Your <span className="text-primary">Package</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Select the perfect Robux package for your gaming needs
            </p>
            
            {/* Username Input */}
            <div className="max-w-md mx-auto mb-8">
              <label className="block text-white text-left mb-2 font-semibold">Enter Your Roblox Username</label>
              <input 
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="YourRobloxUsername"
                className="w-full px-6 py-4 bg-dark/50 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={pkg.id}
                className={`relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-8 border ${pkg.popular ? 'border-primary shadow-2xl shadow-primary/20 scale-105' : 'border-white/10'} hover:scale-105 transition-all animate-slide-up`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>MOST POPULAR</span>
                  </div>
                )}
                
                {pkg.discount && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                    {pkg.discount}% OFF
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="text-6xl font-display font-bold text-white mb-2">
                    {pkg.robux.toLocaleString()}
                  </div>
                  <div className="text-primary text-2xl font-bold">Robux</div>
                </div>

                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-white">${pkg.price}</div>
                  <div className="text-gray-400 text-sm mt-1">One-time payment</div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Instant delivery</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>100% safe & secure</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>24/7 customer support</span>
                  </div>
                  {pkg.discount && (
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Gift className="w-5 h-5 text-yellow-400" />
                      <span>Bonus {pkg.discount}% extra Robux</span>
                    </div>
                  )}
                </div>

                <button 
                  onClick={() => addToCart(pkg)}
                  className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-white/10'} text-white py-4 rounded-full font-bold hover:scale-105 transition-all shine flex items-center justify-center space-x-2`}
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4 bg-dark/30 backdrop-blur-lg">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              What Our <span className="text-primary">Customers Say</span>
            </h2>
            <p className="text-xl text-gray-300">
              Join thousands of satisfied players around the world
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-4xl">{review.avatar}</div>
                  <div>
                    <div className="font-bold text-white">{review.name}</div>
                    <div className="text-sm text-gray-400">{review.date}</div>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 text-sm">{review.comment}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold text-lg">
              <Users className="w-6 h-6" />
              <span>Over 50,000+ Five Star Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { q: 'How long does delivery take?', a: 'Robux delivery is instant! You will receive your Robux within seconds after payment confirmation.' },
              { q: 'Is it safe to buy Robux here?', a: 'Yes! We use 256-bit SSL encryption and comply with all Roblox terms of service. Your account is 100% safe.' },
              { q: 'What payment methods do you accept?', a: 'We accept Credit Cards, PayPal, Cryptocurrency, and Gift Cards for your convenience.' },
              { q: 'Can I get a refund?', a: 'Due to the digital nature of Robux, refunds are only available if delivery fails. Contact our support team for assistance.' },
              { q: 'Do you offer customer support?', a: 'Yes! Our support team is available 24/7 via live chat, email, and phone to help you with any questions.' },
            ].map((faq, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-3 flex items-center space-x-2">
                  <ChevronRight className="w-5 h-5 text-primary" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-gray-300 pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-dark/30 backdrop-blur-lg">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-xl text-gray-300">
              Have questions? We're here to help 24/7
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center hover:border-primary/50 transition-all">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Live Chat</h3>
              <p className="text-gray-300 mb-4">Chat with our support team</p>
              <button className="text-primary hover:underline font-semibold">Start Chat →</button>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center hover:border-primary/50 transition-all">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-gray-300 mb-4">support@kublox.com</p>
              <button className="text-primary hover:underline font-semibold">Send Email →</button>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center hover:border-primary/50 transition-all">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <p className="text-gray-300 mb-4">+1 (555) 123-4567</p>
              <button className="text-primary hover:underline font-semibold">Call Now →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark/50 backdrop-blur-lg border-t border-white/10 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white">KuBlox</h3>
              </div>
              <p className="text-gray-400 mb-4">
                The most trusted platform for Roblox Robux top-up. Fast, safe, and reliable.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-primary transition-colors">
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-primary transition-colors">
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-primary transition-colors">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-primary transition-colors">
                  <Youtube className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-primary transition-colors">Home</a></li>
                <li><a href="#packages" className="text-gray-400 hover:text-primary transition-colors">Packages</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-primary transition-colors">Features</a></li>
                <li><a href="#reviews" className="text-gray-400 hover:text-primary transition-colors">Reviews</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe for exclusive offers and updates</p>
              <div className="flex">
                <input 
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-gray-400 focus:outline-none"
                />
                <button className="bg-primary hover:bg-secondary px-4 py-2 rounded-r-lg transition-colors">
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-gray-400">
            <p>&copy; 2024 KuBlox. All rights reserved. Made with ❤️ for Roblox players worldwide.</p>
            <p className="mt-2 text-sm">KuBlox is not affiliated with or endorsed by Roblox Corporation.</p>
          </div>
        </div>
      </footer>

      {/* Shopping Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-dark border border-white/20 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-up">
            <div className="sticky top-0 bg-dark border-b border-white/20 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
                <ShoppingCart className="w-6 h-6 text-primary" />
                <span>Shopping Cart</span>
              </h2>
              <button onClick={() => setShowCart(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cartItems.map((item, index) => (
                      <div key={index} className="bg-white/5 rounded-2xl p-4 flex justify-between items-center">
                        <div>
                          <div className="text-white font-bold text-lg">{item.robux.toLocaleString()} Robux</div>
                          <div className="text-gray-400 text-sm">Username: {item.username}</div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-white font-bold text-xl">${item.price}</div>
                          <button 
                            onClick={() => removeFromCart(index)}
                            className="text-red-400 hover:text-red-300"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/20 pt-6 space-y-4">
                    <div className="flex justify-between text-white text-xl font-bold">
                      <span>Total:</span>
                      <span className="text-primary">${totalPrice.toFixed(2)}</span>
                    </div>

                    <button className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shine flex items-center justify-center space-x-2">
                      <CreditCard className="w-5 h-5" />
                      <span>Proceed to Checkout</span>
                    </button>

                    <div className="text-center text-gray-400 text-sm">
                      <Lock className="w-4 h-4 inline mr-1" />
                      Secure payment powered by SSL encryption
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <a 
        href="#packages"
        className="fixed bottom-8 right-8 bg-gradient-to-r from-primary to-secondary text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-40 animate-pulse"
      >
        <Zap className="w-6 h-6" />
      </a>
    </div>
  )
}

export default App

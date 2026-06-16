import React, { useState } from 'react'

const CodeEditor = () => {
  const [activeTab, setActiveTab] = useState('java')
  const [copied, setCopied] = useState(false)

  const codeSnippets = {
    java: {
      language: 'Java',
      code: `@RestController
@RequestMapping("/api/v1/orders")
@RequiredArgsConstructor
public class FuelOrderController {

  private final FuelOrderService orderService;

  @PostMapping
  public ResponseEntity<OrderResponse> createOrder(
      @Valid @RequestBody CreateOrderRequest request) {
    
    Order order = orderService.createOrder(request);
    return ResponseEntity.status(HttpStatus.CREATED)
        .body(OrderResponse.from(order));
  }

  @GetMapping("/{orderId}")
  public ResponseEntity<OrderResponse> getOrder(
      @PathVariable UUID orderId) {
    
    Order order = orderService.getOrder(orderId);
    return ResponseEntity.ok(OrderResponse.from(order));
  }
}`,
    },
    spring: {
      language: 'Spring Configuration',
      code: `@Configuration
@EnableWebSecurity
public class SecurityConfig {

  @Bean
  public SecurityFilterChain filterChain(
      HttpSecurity http) throws Exception {
    
    http.authorizeRequests()
        .antMatchers("/api/public/**").permitAll()
        .antMatchers("/api/admin/**").hasRole("ADMIN")
        .anyRequest().authenticated()
        .and()
        .oauth2Login();
    
    return http.build();
  }

  @Bean
  public JwtAuthenticationFilter jwtFilter() {
    return new JwtAuthenticationFilter();
  }
}`,
    },
    sql: {
      language: 'SQL',
      code: `-- Create optimized indexes
CREATE INDEX idx_orders_user_id 
  ON orders(user_id);

CREATE INDEX idx_orders_status 
  ON orders(status) 
  WHERE deleted_at IS NULL;

-- Query active orders with aggregation
SELECT 
  u.id,
  u.email,
  COUNT(o.id) as total_orders,
  SUM(o.amount) as total_amount,
  MAX(o.created_at) as last_order
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE o.status = 'COMPLETED'
GROUP BY u.id, u.email
HAVING COUNT(o.id) > 5
ORDER BY total_amount DESC;`,
    },
  }

  const handleCopy = () => {
    const code = codeSnippets[activeTab as keyof typeof codeSnippets].code
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-terminal-gray3">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-terminal-white mb-2">
            <span className="text-terminal-gray5">~/</span>code_editor
          </h2>
          <div className="w-20 h-1 bg-terminal-gray5"></div>
        </div>

        {/* Code editor */}
        <div className="card animate-slide-up">
          {/* Editor header */}
          <div className="flex items-center justify-between pb-4 border-b border-terminal-gray3 mb-4">
            <div className="flex space-x-2">
              {Object.entries(codeSnippets).map(([key, snippet]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-2 text-sm uppercase tracking-wider transition-all duration-300 ${
                    activeTab === key
                      ? 'text-terminal-white border-b-2 border-terminal-gray5'
                      : 'text-terminal-gray7 hover:text-terminal-white'
                  }`}
                >
                  {snippet.language}
                </button>
              ))}
            </div>
            <button
              onClick={handleCopy}
              className="text-xs text-terminal-gray7 hover:text-terminal-white transition-colors"
              title="Copy code"
            >
              {copied ? '✓ Copied' : '📋 Copy'}
            </button>
          </div>

          {/* Code content */}
          <div className="relative">
            <pre className="text-xs md:text-sm text-terminal-gray8 overflow-x-auto bg-terminal-gray1 p-4 rounded border border-terminal-gray2">
              <code>{codeSnippets[activeTab as keyof typeof codeSnippets].code}</code>
            </pre>
          </div>

          {/* Footer info */}
          <div className="mt-4 pt-4 border-t border-terminal-gray3 text-xs text-terminal-gray6">
            <span className="text-terminal-gray5">$</span> Interactive code samples demonstrating backend engineering
            practices - REST APIs, Spring Security, database optimization
          </div>
        </div>

        {/* Info boxes */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            {
              title: 'RESTful Design',
              description: 'Clean API endpoints following REST conventions with proper HTTP methods and status codes.',
            },
            {
              title: 'Security First',
              description: 'JWT authentication, role-based access control, and OAuth2 integration for enterprise security.',
            },
            {
              title: 'Performance',
              description: 'Database indexing strategies, query optimization, and caching mechanisms for scalability.',
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className="card text-sm animate-slide-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <p className="text-terminal-gray5 text-xs uppercase tracking-widest mb-2">
                {`$${index + 1}`}
              </p>
              <h4 className="text-terminal-white font-bold mb-2">{item.title}</h4>
              <p className="text-terminal-gray8 text-xs leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CodeEditor

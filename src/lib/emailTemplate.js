export function getWelcomeEmail(firstName) {
    return {
      subject: "Welcome to FinanSmart – Your Smart Finance Companion!",
      html: `
        <h1>Welcome to FinanSmart, <strong>${firstName}!</strong> 🎉</h1>
        <p>We're thrilled to have you onboard! FinanSmart is here to help you take full control of your finances – track expenses, budget smarter, and get AI-powered financial insights tailored just for you.</p>
  
        <h2>🚀 What You Can Do with FinanSmart:</h2>
        <ul>
          <li>📊 Effortlessly manage your expenses and budget everything.</li>
          <li>💡 Get smart AI-driven financial advice to optimize your spending.</li>
          <li>📅 Plan ahead with our powerful forecasting tools.</li>
          <li>🔔 Receive alerts to keep your budget on track.</li>
        </ul>
  
        <p>Your financial journey just got smarter, and we're here to support you every step of the way! Start exploring now and make the most of your money.</p>
  
        // <p>📝 <strong>Login now and take control:</strong> <a href="https://finansmart.com/login">Get Started</a></p>
  
        <p>Best,<br>The FinanSmart Team</p>
      `,
    };
  }
  
export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f5f7fa;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
      overflow: hidden;
    }
    .header {
      background: linear-gradient(90deg, #4CAF50, #45a049);
      color: #fff;
      text-align: center;
      padding: 40px 20px;
    }
    .header h1 {
      margin: 0;
      font-size: 28px;
      font-weight: 700;
      letter-spacing: 1px;
    }
    .content {
      padding: 40px 30px;
      text-align: center;
      background-color: #f9fafb;
    }
    .content p {
      margin: 15px 0;
      font-size: 16px;
      line-height: 1.8;
      color: #555;
    }
    .verification-code {
      margin: 30px 0;
      padding: 20px 50px;
      font-size: 36px;
      font-weight: bold;
      letter-spacing: 4px;
      color: #fff;
      background: linear-gradient(90deg, #4CAF50, #45a049);
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      font-family: 'Courier New', Courier, monospace;
      animation: pulse 1.5s infinite;
    }
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      }
      50% {
        transform: scale(1.02);
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
      }
    }
    .footer {
      text-align: center;
      padding: 20px;
      font-size: 13px;
      color: #888;
      background: #f5f7fa;
    }
    .footer p {
      margin: 5px 0;
    }
    .footer a {
      color: #4CAF50;
      text-decoration: none;
      font-weight: 600;
    }
    .footer a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Email Verification Required</h1>
    </div>
    <div class="content">
      <p>Hi there,</p>
      <p>We’re excited to have you on board! Please use the verification code below to activate your account:</p>
      <div class="verification-code">{verificationCode}</div>
      <p>Simply enter this code on the verification page to complete your registration.</p>
      <p><strong>Note:</strong> This code will expire in 15 minutes for security purposes.</p>
      <p>If you didn’t sign up with us, please disregard this message.</p>
      <p>Warm regards,<br><strong>The Auth Guardian - UjjwalS</strong></p>
    </div>
    <div class="footer">
      <p>This email was sent automatically; please do not reply.</p>
      <p>Need assistance? <a href="https://github.com/UjjwalSaini07" target="_blank">Contact Support</a></p>
    </div>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f6f9;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background: #ffffff;
      border-radius: 16px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      overflow: hidden;
    }
    .header {
      background: linear-gradient(90deg, #4caf50, #45a049);
      color: #ffffff;
      text-align: center;
      padding: 40px 20px;
    }
    .header h1 {
      margin: 0;
      font-size: 28px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .content {
      padding: 40px 30px;
      text-align: left;
      background-color: #f8fafc;
    }
    .content p {
      margin: 15px 0;
      font-size: 16px;
      line-height: 1.8;
      color: #555;
    }
    .success-icon {
      margin: 30px auto;
      background-color: #4caf50;
      color: #ffffff;
      width: 70px;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      font-size: 36px;
      font-weight: bold;
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    }
    .security-tips {
      margin: 20px 0;
      padding: 20px;
      background-color: #ffffff;
      border: 1px solid #dce3e9;
      border-radius: 12px;
    }
    .security-tips p {
      margin: 0;
      font-size: 15px;
      font-weight: bold;
    }
    .security-tips ul {
      margin: 10px 0 0 20px;
      padding: 0;
      list-style-type: disc;
      color: #555;
    }
    .footer {
      text-align: center;
      padding: 20px;
      font-size: 14px;
      color: #888;
      background: #f8fafc;
    }
    .footer p {
      margin: 5px 0;
    }
    .footer a {
      color: #4caf50;
      text-decoration: none;
      font-weight: bold;
    }
    .footer a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Password Reset Successful</h1>
    </div>
    <div class="content">
      <p>Hi there,</p>
      <p>We’re happy to inform you that your password has been successfully reset.</p>
      
      <div class="success-icon">✓</div>
      <p>If you did not request this password reset, please <a href="mailto:ujjwalsaini0007+Authguard@example.com" style="color: #4caf50; text-decoration: none;">contact support</a> immediately.</p>
      <div class="security-tips">
        <p>To keep your account secure, we recommend:</p>
        <ul>
          <li>Using a strong, unique password</li>
          <li>Enabling two-factor authentication</li>
          <li>Avoiding reuse of passwords across different platforms</li>
        </ul>
      </div>

      <p>Thank you for helping us ensure your account’s security.</p>
      <p>Best regards,<br><strong>Auth Guardian - UjjwalS</strong></p>
    </div>

    <div class="footer">
      <p>This email is automatically generated. Please do not reply.</p>
      <p>Need help? <a href="https://github.com/UjjwalSaini07">Visit our support center</a></p>
    </div>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f6f9;
      color: #333;
    }

    .container {
      max-width: 600px;
      margin: 40px auto;
      background: #ffffff;
      border-radius: 16px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      overflow: hidden;
    }

    .header {
      background: linear-gradient(90deg, #4caf50, #45a049);
      color: #ffffff;
      text-align: center;
      padding: 40px 20px;
    }

    .header h1 {
      margin: 0;
      font-size: 28px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .content {
      padding: 40px 30px;
      text-align: left;
      background-color: #f8fafc;
    }

    .content p {
      margin: 15px 0;
      font-size: 16px;
      line-height: 1.8;
      color: #555;
    }

    .reset-button {
      display: inline-block;
      background-color: #4caf50;
      color: #fff;
      padding: 14px 28px;
      text-decoration: none;
      border-radius: 8px;
      font-weight: bold;
      text-align: center;
      font-size: 16px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transition: background-color 0.3s ease;
    }

    .reset-button:hover {
      background-color: #3e8e41;
    }

    .note {
      margin-top: 20px;
      padding: 20px;
      background-color: #fff7d6;
      border: 1px solid #ffd966;
      border-radius: 12px;
      color: #856404;
      font-size: 15px;
    }

    .footer {
      text-align: center;
      padding: 20px;
      font-size: 14px;
      color: #888;
      background: #f8fafc;
    }

    .footer p {
      margin: 5px 0;
    }

    .footer a {
      color: #4caf50;
      text-decoration: none;
      font-weight: bold;
    }

    .footer a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Password Reset</h1>
    </div>
    <div class="content">
      <p>Hi there,</p>
      <p>We received a request to reset your password. If you did not make this request, please disregard this email.</p>
      <p>To reset your password, please click the button below:</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="{resetURL}" class="reset-button">Reset Password</a>
      </div>
      <p>This link will expire in <strong>1 hour</strong> for security reasons.</p>
      <div class="note">
        <strong>Important:</strong> If you cannot click the button, copy and paste the following link into your browser:<br>
        <a href="{resetURL}" style="color: #4caf50;">{resetURL}</a>
      </div>
      <p>Thank you for using our service. If you have any questions, feel free to reach out to our support team.</p>
      <p>Best regards,<br><strong>Auth Guardian - UjjwalS</strong></p>
    </div>

    <div class="footer">
      <p>This is an automatically generated email. Please do not reply.</p>
      <p>Need assistance? <a href="https://github.com/UjjwalSaini07">Visit our support center</a></p>
    </div>
  </div>
</body>
</html>
`;

export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to AuthGuardian</title>
  <style>
    body {
      font-family: 'Poppins', Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f6f9;
      color: #333;
    }

    .container {
      max-width: 650px;
      margin: 50px auto;
      background: #ffffff;
      border-radius: 16px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      overflow: hidden;
    }

    .header {
      background: linear-gradient(135deg, #4cafef, #1976d2);
      color: white;
      text-align: center;
      padding: 40px 20px;
      font-size: 28px;
      font-weight: 700;
      letter-spacing: 1px;
    }

    .content {
      padding: 30px;
      color: #555;
      line-height: 1.8;
    }

    .content .welcome-message {
      font-size: 24px;
      font-weight: bold;
      color: #222;
      margin-bottom: 20px;
    }

    ul {
      margin: 20px 0;
      padding-left: 20px;
      list-style-type: disc;
    }

    ul li {
      margin-bottom: 10px;
      font-size: 16px;
      color: #666;
    }

    .cta-button {
      display: inline-block;
      padding: 14px 36px;
      background-color: #4cafef;
      color: white;
      text-decoration: none;
      border-radius: 8px;
      text-align: center;
      font-size: 16px;
      font-weight: 600;
      margin-top: 20px;
      box-shadow: 0 6px 12px rgba(76, 175, 239, 0.2);
      transition: all 0.3s ease;
    }

    .cta-button:hover {
      background-color: #1976d2;
      box-shadow: 0 8px 20px rgba(76, 175, 239, 0.3);
      transform: translateY(-2px);
    }

    .footer {
      background-color: #f9f9f9;
      padding: 20px;
      text-align: center;
      font-size: 14px;
      color: #777;
      border-top: 1px solid #e0e0e0;
    }

    .footer a {
      color: #4cafef;
      text-decoration: none;
      font-weight: 600;
    }

    .footer a:hover {
      text-decoration: underline;
    }

    .footer p {
      margin: 5px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      Welcome to AuthGuardian!
    </div>

    <div class="content">
      <p class="welcome-message">
        Hi <strong>{name}</strong>,
      </p>
      <p>
        Welcome to <strong>AuthGuardian</strong>! We're thrilled to have you join us on this journey to making authentication secure and seamless.
      </p>
      <p>Here’s what you can look forward to:</p>
      <ul>
        <li>Manage your user accounts with robust security protocols.</li>
        <li>Leverage advanced features like two-factor authentication.</li>
        <li>Integrate effortlessly with our developer-friendly APIs.</li>
        <li>Monitor your systems with real-time analytics.</li>
      </ul>
      <p>
        Let’s get started! Discover tools designed to secure your business and provide a seamless user experience.
      </p>
      <div style="text-align: center;">
        <a href="#" class="cta-button">Explore AuthGuardian</a>
      </div>
      <p>
        If you need any assistance, feel free to reach out to our support team. We're here to ensure your experience is exceptional.
      </p>
      <p>Best regards,<br><strong>The AuthGuardian Team</strong></p>
    </div>

    <div class="footer">
      <p>&copy; <script>document.write(new Date().getFullYear());</script> AuthGuardian. All rights reserved.</p>
      <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
    </div>
  </div>
</body>
</html>
`;

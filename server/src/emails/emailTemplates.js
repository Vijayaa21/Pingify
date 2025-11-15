export function createWelcomeEmailTemplate(name, clientURL) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome to Pingify</title>
  </head>

  <body style="margin:0; padding:0; background:#faf7f7; font-family:Arial, Helvetica, sans-serif;">

    <!-- Outer Container -->
    <div style="max-width:600px; margin:40px auto; background:white; border-radius:12px; overflow:hidden; box-shadow:0 6px 25px rgba(0,0,0,0.08);">

      <!-- Top Banner -->
      <div style="background:#B23A48; padding:40px 20px; text-align:center;">
        <h1 style="color:white; margin:0; font-size:30px; font-weight:700;">Welcome Aboard 🎉</h1>
        <p style="color:#fbeff0; margin:10px 0 0; font-size:16px;">You're officially a part of Pingify!</p>
      </div>

      <!-- Greeting Section -->
      <div style="padding:30px;">
        <p style="font-size:18px; margin:0 0 15px; color:#B23A48;"><strong>Hi ${name},</strong></p>
        <p style="font-size:15px; color:#444;">
          We're excited to welcome you to <strong>Pingify</strong> — a smooth, fast and beautifully simple messaging platform designed to make communication effortless.
        </p>
      </div>

      <!-- Feature Cards -->
      <div style="padding:0 30px 20px;">

        <div style="background:#fff4f6; border:1px solid #f1dfe1; padding:20px; border-radius:10px; margin-bottom:15px;">
          <h3 style="margin:0 0 8px; color:#B23A48; font-size:17px;">✨ Create Your Space</h3>
          <p style="margin:0; color:#555; font-size:14px;">Set up your profile and let your personality shine.</p>
        </div>

        <div style="background:#fff4f6; border:1px solid #f1dfe1; padding:20px; border-radius:10px; margin-bottom:15px;">
          <h3 style="margin:0 0 8px; color:#B23A48; font-size:17px;">🤝 Connect With People</h3>
          <p style="margin:0; color:#555; font-size:14px;">Add your contacts and start meaningful conversations.</p>
        </div>

        <div style="background:#fff4f6; border:1px solid #f1dfe1; padding:20px; border-radius:10px;">
          <h3 style="margin:0 0 8px; color:#B23A48; font-size:17px;">🚀 Start Messaging</h3>
          <p style="margin:0; color:#555; font-size:14px;">Chat, share photos, send videos, and stay connected.</p>
        </div>

      </div>

      <!-- CTA Section -->
      <div style="text-align:center; padding:30px;">
        <a href="${clientURL}" 
        style="background:#B23A48; color:white; padding:14px 40px; text-decoration:none; font-size:16px; border-radius:50px; display:inline-block; font-weight:bold;">
          Open Pingify
        </a>
      </div>

      <!-- Divider -->
      <hr style="border:none; border-top:1px solid #f0d7da; margin:0 30px;">

      <!-- Footer -->
      <div style="text-align:center; padding:20px 30px 30px; color:#777; font-size:12px;">
        <p style="margin:0 0 10px;">© 2025 Pingify. All rights reserved.</p>
        <p style="margin:0;">
          <a href="#" style="color:#B23A48; text-decoration:none; margin:0 8px;">Privacy</a>
          |
          <a href="#" style="color:#B23A48; text-decoration:none; margin:0 8px;">Terms</a>
          |
          <a href="#" style="color:#B23A48; text-decoration:none; margin:0 8px;">Support</a>
        </p>
      </div>

    </div>
  </body>
  </html>
  `;
}

import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { BadRequestException, ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as cookieParser from "cookie-parser";

async function start() {
  try {
    const PORT = process.env.PORT ?? 3030;
    const app = await NestFactory.create(AppModule);
    app.use(cookieParser());
    app.useGlobalPipes(new ValidationPipe());
    app.setGlobalPrefix("api");

    app.enableCors({
      origin: (origin, callback) => {
        const allowedOrigins = [
          "http://localhost:8000",
          "http://localhost:3000",
          "http://myticket.uz",
          "http://api.myticket.uz",
          "http://myticket.vercel.app",
        ];
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new BadRequestException("Not allowed by CORS"));
        }
      },
      methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
      credentials: true, //cookie va header
    });

    const config = new DocumentBuilder()
      .setTitle("MyTicket Project")
      .setDescription("MyTicket RESTFULL API")
      .setVersion("1.0")
      .addTag("AcessToken, RefreshToken, Cookie, BOT, SMS, SendMail, Guards")
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("/api/docs", app, document);
    await app.listen(PORT, () => {
      console.log(`Server started at: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
start();


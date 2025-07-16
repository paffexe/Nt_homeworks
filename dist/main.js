"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cookieParser = require("cookie-parser");
async function start() {
    try {
        const PORT = process.env.PORT ?? 3030;
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        app.use(cookieParser());
        app.useGlobalPipes(new common_1.ValidationPipe());
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
                }
                else {
                    callback(new common_1.BadRequestException("Not allowed by CORS"));
                }
            },
            methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
            credentials: true,
        });
        const config = new swagger_1.DocumentBuilder()
            .setTitle("MyTicket Project")
            .setDescription("MyTicket RESTFULL API")
            .setVersion("1.0")
            .addTag("AcessToken, RefreshToken, Cookie, BOT, SMS, SendMail, Guards")
            .addBearerAuth()
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup("/api/docs", app, document);
        await app.listen(PORT, () => {
            console.log(`Server started at: http://localhost:${PORT}`);
        });
    }
    catch (error) {
        console.log(error);
    }
}
start();
//# sourceMappingURL=main.js.map
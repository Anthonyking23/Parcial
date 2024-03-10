"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnthonyParcial1Controller = void 0;
const common_1 = require("@nestjs/common");
let AnthonyParcial1Controller = class AnthonyParcial1Controller {
    getHello() {
        return 'Hola mundo';
    }
    multiplication(numeros) {
        const { num1, num2, num3 } = numeros;
        return num1 * num2 * num3;
    }
    subtract(numeros) {
        const { one, two } = numeros;
        return one - two;
    }
    getetSaludar(name) {
        return `¡Hola, ${name}!`;
    }
};
exports.AnthonyParcial1Controller = AnthonyParcial1Controller;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AnthonyParcial1Controller.prototype, "getHello", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Number)
], AnthonyParcial1Controller.prototype, "multiplication", null);
__decorate([
    (0, common_1.Post)('/subtract'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Number)
], AnthonyParcial1Controller.prototype, "subtract", null);
__decorate([
    (0, common_1.Get)('/Saludo/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], AnthonyParcial1Controller.prototype, "getetSaludar", null);
exports.AnthonyParcial1Controller = AnthonyParcial1Controller = __decorate([
    (0, common_1.Controller)('anthony-parcial1')
], AnthonyParcial1Controller);
//# sourceMappingURL=anthony_parcial1.controller.js.map
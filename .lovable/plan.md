

## Ajuste: Hero 110vh + sobreposição correta

O hero deve ter **110vh** de altura total. Os 10vh extras ficam abaixo da dobra — é nessa área que o card da AboutSection sobrepõe.

### Mudanças

**`src/components/HeroSection.tsx`**
- Alterar height do container interno de `100vh` para `110vh`
- Remover o `paddingBottom: "120px"` do wrapper externo (não é mais necessário, os 10vh extras já criam o espaço)

**`src/components/AboutSection.tsx`**
- Ajustar negative margin para `-mt-[120px]` (aproximadamente metade dos 10vh extras, para o card sobrepor essa área)


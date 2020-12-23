import { companyData } from "./companyData"
export const WhatsAppLink = (
  message = "mensagem teste",
  phone = companyData.phone.region +
    companyData.phone.ddd +
    companyData.phone.prefix +
    companyData.phone.sufix
) => {
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURI(
    message
  )}`
}

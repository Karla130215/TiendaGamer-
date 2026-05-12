export function esVip(cantidad, total) {
  let EsVip = false;
  if (cantidad > 20 && total > 1000) {
    EsVip = true;
  }
  return EsVip;
}

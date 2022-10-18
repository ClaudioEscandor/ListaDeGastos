const formatearCantidad = (cantidad) => {
    return new Intl.NumberFormat(
        'es-CL',
        {style: 'currency', currency: 'CLP', minimumFractionDigits: 0}
    ).format(cantidad);
}
 
export default formatearCantidad;
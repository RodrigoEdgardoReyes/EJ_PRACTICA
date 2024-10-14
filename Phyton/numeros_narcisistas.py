# Numeros narcisistas

# Un numero es narcisista si es igual a la suma de sus
# propios digitos, cada uno elevado a la potencia del 
# numero de dijitos.

# Problema.
# Escribir una funcion que reciba un numero entero y 
# determine si es numero narcisista.

# EJ.
# Input: 153
# Output: True
# (153 = 1^3 + 5^3 + 3^3)
 
#  def numNarcisista():
total = 0

def numNarcisista (num):
    # Pido al usuario que ingrese un numero
    num = input('Ingrese un numero entero: ')

    # muestro el numero ingresado por el usuario
    print('numero ingresado', num)

    # Convertir el numero a cadena str(num)
    # Lo usare para comparar el resultado final
    num_cadena = str(num)

    # Contar el numero de digitos del numero entero ingresado por el user
    # Lo usare para multiplicar cada digito por el total de digitos del 
    # numero entero
    num_digitos = len(num_cadena)

    # muestro el numero de digitos
    print('numero de digitos: ', num_digitos)

    # Creo un diccionario para obtener los digitos por separado
    digitos = []
    resultado = 0

    # for clave, valor in digitos.items():
    # print(f'Clave: {clave}, Valor: {valor}')

    for i in range(num_digitos):
        digito = int(num[i]) ** num_digitos
        print(f'digito: {digito}')
        digitos.append(digito)


# numNarcisista()
print('El numero ingresado es: ', numNarcisista(total))
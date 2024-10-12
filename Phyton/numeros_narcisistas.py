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
def numNarcisista (num):
    num = input('Ingrese un numero entero')

    print(f"Numero entero: ", num)

numNarcisista()
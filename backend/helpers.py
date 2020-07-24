def inttobin(integertoconvert):
    """
    :param integertoconvert: the base-10 integer to convert to binary
    :return: returns the binary equivalent of the integer
    """
    # converts the number into binary and removes the '0b'
    binarynumber = bin(integertoconvert)[2:]
    # if the length of the integer is not a multiple of 8 (a byte), it adds leading 0's
    while len(binarynumber) % 8 != 0:
        binarynumber = "0" + binarynumber

    return binarynumber


def getbytearray(file):
    """
    This method takes a file and converts it to an array of bytes
    :param file: The file to be converted
    :return: An array of bytes
    """

    # Open the file as binary
    with open(file, "rb") as image:
        # Read the file and use the built-in bytearray function
        contents = image.read()
        raw_byte_array = bytearray(contents)

    # Convert the integers into bytes and return the new byte array
    byte_array = []
    for i in range(len(raw_byte_array)):
        byte_array.append(inttobin(raw_byte_array[i]))

    return byte_array

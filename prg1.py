import random
def checking():
    print("invalid please enter y or n only")
    newch=input()
    newch=newch.lower()
    if newch == 'y':
        re()
    elif newch == 'n':
        exit()
    else:
        checking()


def re():

    check = True
    pin = random.randint(1000, 9999)
    ch = "y"
    spin = str(pin)
    count = 0
    while ch == "y":
        print(pin)
        try:
            u = int(input("enter 4 digit number"))
        except ValueError:
                print("invalid input")
                u = int(input("enter 4 digit number"))

        us = str(u)
        ln = len(us)
        if ln != 4:
            print("please enter 4 digit only")
            break
        for i in range(4):
            if us == spin:
                print("you win")
                newch = input("do you want continue press y other wise n\n")
                newch = newch.lower()
                while check == True:

                    # if newch != 'y' or 'n':
                    #     check = False
                    # else:
                    #     check = True
                    if newch == "n":
                        exit()
                    elif newch == "y":
                        re()

                    else:
                        checking()
                        exit()

            elif us[i] == spin[i]:
                print("you got rabit at", (i + 1), "position")
            elif us[i] in spin:
                count = count + 1
        print("you got", count, "tortoise")
        count = 0

        ch = input("do you want continue press y other wise n\n")
        ch = ch.lower()
        # if ch != 'n':
        #     print("invalid input please enter y or n")
        #     ch = input()
        #     ch = ch.lower()
        if ch != "y":
            exit()


re()

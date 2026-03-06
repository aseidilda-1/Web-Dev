from models import Car, Motorcycle, Vehicle

car = Car("Toyota", "Camry", 2020, 4)
bike = Motorcycle("Yamaha", "R1", 2022, 1000)
vehicle = Vehicle("Generic", "Transport", 2015)

vehicles = [car, bike, vehicle]

for v in vehicles:
    print(v)
    print(v.start_engine())
    print(v.drive())
    print(v.stop_engine())
    print()
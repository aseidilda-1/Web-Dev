class Vehicle:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

    def start_engine(self):
        return f"{self.brand} {self.model} engine started."

    def stop_engine(self):
        return f"{self.brand} {self.model} engine stopped."

    def drive(self):
        return f"{self.brand} {self.model} is driving."

    def __str__(self):
        return f"{self.year} {self.brand} {self.model}"


class Car(Vehicle):
    def __init__(self, brand, model, year, doors):
        super().__init__(brand, model, year)
        self.doors = doors

    def drive(self):
        return f"Car {self.brand} {self.model} is driving smoothly on the road."

    def open_trunk(self):
        return f"{self.brand} {self.model} trunk is open."


class Motorcycle(Vehicle):
    def __init__(self, brand, model, year, engine_cc):
        super().__init__(brand, model, year)
        self.engine_cc = engine_cc

    def drive(self):
        return f"Motorcycle {self.brand} {self.model} is speeding on the highway."

    def wheelie(self):
        return f"{self.brand} {self.model} performs a wheelie!"
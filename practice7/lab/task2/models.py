class Vehicle:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

    def move(self):
        return f"{self.brand} {self.model} is moving."

    def info(self):
        return f"Brand: {self.brand}, Model: {self.model}, Year: {self.year}"

    def __str__(self):
        return f"{self.year} {self.brand} {self.model}"


class Car(Vehicle):
    def __init__(self, brand, model, year, fuel_type):
        super().__init__(brand, model, year)
        self.fuel_type = fuel_type

    def move(self):
        return f"The car {self.brand} {self.model} is driving on the road."

    def honk(self):
        return f"{self.brand} {self.model} says: Beep beep!"


class Bike(Vehicle):
    def __init__(self, brand, model, year, bike_type):
        super().__init__(brand, model, year)
        self.bike_type = bike_type

    def move(self):
        return f"The bike {self.brand} {self.model} is being ridden."

    def ring_bell(self):
        return f"{self.brand} {self.model} says: Ring ring!"
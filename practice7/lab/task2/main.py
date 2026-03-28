from models import Vehicle, Car, Bike


def main():
    vehicle1 = Vehicle("Toyota", "Corolla", 2020)
    car1 = Car("BMW", "X5", 2022, "Petrol")
    bike1 = Bike("Trek", "Marlin 7", 2021, "Mountain")

    vehicles = [vehicle1, car1, bike1]

    for vehicle in vehicles:
        print(vehicle)           
        print(vehicle.info())    
        print(vehicle.move())    
        print()

    print(car1.honk())
    print(bike1.ring_bell())


if __name__ == "__main__":
    main()
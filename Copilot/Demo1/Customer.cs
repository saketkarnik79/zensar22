using System;

namespace Demo1
{
    public class Customer
    {
        // Fields
        public int CustomerId;
        public string Name;
        public string AddressEmail;

        // Optional: parameterless constructor
        public Customer() { }

        // Optional: constructor with parameters
        // This constructor initializes a Customer object with three parameters:
        // customerId (int): unique identifier for the customer
        // name (string): the customer's name
        // addressEmail (string): the customer's address or email
        // Each parameter is assigned to its corresponding class field
        public Customer(int customerId, string name, string addressEmail)
        {
            CustomerId = customerId;           // Assign customerId parameter to CustomerId field
            Name = name;                       // Assign name parameter to Name field
            AddressEmail = addressEmail;       // Assign addressEmail parameter to AddressEmail field
        }
    }
}

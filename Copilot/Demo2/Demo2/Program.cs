namespace Demo2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Test the Power method
            double baseNumber = 2;
            int exponent = 3;
            double result = Power(baseNumber, exponent);
            Console.WriteLine(result);
            Console.WriteLine("Program completed");
            // wait for user input before closing the console window
            Console.ReadKey();
        }

        // Write a method that calulates the given power of a number using recursion
        static double Power(double baseNumber, int exponent)
        {
            if (exponent == 0)
                return 1;
            else if (exponent > 0)
                return baseNumber * Power(baseNumber, exponent - 1);
            else
                return 1 / Power(baseNumber, -exponent);
        }
    }
}

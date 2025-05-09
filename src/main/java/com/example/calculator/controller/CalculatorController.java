package com.example.calculator.controller;

import com.example.calculator.model.Numbers;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/calc")
@CrossOrigin(origins = "*") // allow frontend to access
public class CalculatorController {

    @PostMapping("/add")
    public double add(@RequestBody Numbers numbers) {
        return numbers.getNum1() + numbers.getNum2();
    }

    @PostMapping("/subtract")
    public double subtract(@RequestBody Numbers numbers) {
        return numbers.getNum1() - numbers.getNum2();
    }

    @PostMapping("/multiply")
    public double multiply(@RequestBody Numbers numbers) {
        return numbers.getNum1() * numbers.getNum2();
    }

    @PostMapping("/divide")
    public double divide(@RequestBody Numbers numbers) {
        if (numbers.getNum2() == 0) throw new ArithmeticException("Division by zero");
        return numbers.getNum1() / numbers.getNum2();
    }
}

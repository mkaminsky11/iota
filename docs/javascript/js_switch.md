## switch

### Summary

The **switch statement** evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.

### Syntax

    switch (expression) {
      case value1:
        //Statements executed when the result of expression matches value1
        [break;]
      case value2:
        //Statements executed the result of expression matches value2
        [break;]
      ...
      case valueN:
        //Statements executed when the result of expression matches valueN
        [break;]
      default:
        //Statements executed when none of the values match the value of the expression
        [break;]
    }

**`expression`**

> An expression matched against each case clause.

**`case expressionN`**

> A case clause used to match against `expression`.

**`statementsN`**

> Statements that are executed if `expression` matches the associated case clause.

**`statements_def`**

> Statements that are executed if `expression` does not match any case clause.

### Description

If a match is found, the program executes the associated statements. If multiple cases match the provided value, the first case that matches is selected, even if the cases are not equal to each other.

The program first looks for a `case` clause whose expression evaluates to the same value as the input expression (using [strict comparison][0], `===)` and then transfers control to that clause, executing the associated statements. If no matching `case` clause is found, the program looks for the optional `default` clause, and if found, transfers control to that clause, executing the associated statements. If no `default` clause is found, the program continues execution at the statement following the end of `switch`. By convention, the `default` clause is the last clause, but it does not need to be so.

The optional `[break][1]` statement associated with each case label ensures that the program breaks out of switch once the matched statement is executed and continues execution at the statement following switch. If `break` is omitted, the program continues execution at the next statement in the `switch` statement.

### Examples

### Example: Using `switch`

In the following example, if `expr` evaluates to "Bananas", the program matches the value with case "Bananas" and executes the associated statement. When `break` is encountered, the program breaks out of `switch` and executes the statement following `switch`. If `break` were omitted, the statement for case "Cherries" would also be executed.

    switch (expr) {
      case "Oranges":
        console.log("Oranges are $0.59 a pound.");
        break;
      case "Apples":
        console.log("Apples are $0.32 a pound.");
        break;
      case "Bananas":
        console.log("Bananas are $0.48 a pound.");
        break;
      case "Cherries":
        console.log("Cherries are $3.00 a pound.");
        break;
      case "Mangoes":
      case "Papayas":
        console.log("Mangoes and papayas are $2.79 a pound.");
        break;
      default:
        console.log("Sorry, we are out of " + expr + ".");
    }
    
    console.log("Is there anything else you'd like?");
    

### Example: What happens if I forgot a break?

If you forget a break then script will run from the case where criteria is met, and will run the case after that regardless if criteria was met. See example here:

    var foo = 0;
    switch (foo) {
        case -1:
            console.log('negative 1');
            break;
        case 0: // foo is 0 so criteria met here so this block will run
            console.log(0)
            // NOTE: the forgotten break would have been here
        case 1: // no break statement in 'case 0:' so this case will run as well
            console.log(1);
            break; // it encounters this break so will not continue into 'case 2:'
        case 2:
            console.log(2);
            break;
        default:
            console.log('default');
    }

### Example: Methods for multiple cases

Source for this technique is here:

[- Switch statement multiple cases in JavaScript (Stack Overflow)][2]

#### Multi-Case - Single Operation

This method takes advantage of the fact that if there is no break below a case statement it will continue to execute the next case statement regardless if the case meets the criteria. See the section title "What happens if I forgot a break?"

This is an example of a single operation sequential switch statement, where four different values perform exactly the same.

    var Animal = 'Giraffe';
    switch (Animal) {
        case 'Cow':
        case 'Giraffe':
        case 'Dog':
        case 'Pig':
            alert('This animal will go on Noah\'s Ark.');
            break;
        case 'Dinosaur':
        default:
            alert('This animal will not.');
    }

#### Multi-Case - Chained Operations

This is an example of a multiple-operation sequential switch statement, where, depending on the provided integer, you can receive different output. This shows you that it wil traverse in the order that you put the case statements, and it does not have to be numerically sequential. In JavaScript, you can even mix in definitions of strings into these case statements as well.

    var foo = 1;
    var output = 'Output: ';
    switch (foo) {
        case 10:
            output += 'So ';
        case 1:
            output += 'What ';
            output += 'Is ';
        case 2:
            output += 'Your ';
        case 3:
            output += 'Name';
        case 4:
            output += '?';
            alert(output);
            break;
        case 5:
            output += '!';
            alert(output);
            break;
        default:
            alert('Please pick a number from 0 to 6!');
    }

Output from this example:
Value
Alert Text

foo is NaN or not 1, 2, 3, 4, 5 or 10
Please pick a number from 0 to 6!

10
Output: So What Is Your Name?

1
Output: What Is Your Name?

2
Output: Your Name?

3
Output: Name?

4
Output: ?

5
Output: !



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/break "JavaScript/Reference/Statements/break"
[2]: http://stackoverflow.com/questions/13207927/switch-statement-multiple-cases-in-javascript
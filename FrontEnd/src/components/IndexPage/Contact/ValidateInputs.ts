const Errors = [
    {
        Title: "Name",
        Text: {
            MinLength: "Name must be at least 3 characters long",
            MaxLength: "Name must be less than 50 characters long"
        },
        Validation: {
            MinLength: 3,
            MaxLength: 50
        }
    }, {
        Title: "LastName",
        Text: {
            MinLength: "LastName must be at least 5 characters long",
            MaxLength: "LastName must be less than 100 characters long"
        },
        Validation: {
            MinLength: 5,
            MaxLength: 100
        }
    }, {
        Title: "Telephone",
        Text: {
            MinLength: "Telephone must be at least 17 characters long",
            MaxLength: "Telephone must be less than 21 characters long",
            Format: "Telephone must be in format +55 (55) 91234 - 5678 Or +598 91234 - 5678"
        },
        Validation: {
            MinLength: 17,
            MaxLength: 21,
            Format: "\\+([0-9]{2,3})((\\s\\([0-9]{2}\\)\\s)|(\\s))([0-9]{4,5})\\s-\\s([0-9]{4})$"
        }
    }, {
        Title: "Email",
        Text: {
            MinLength: "Email must be at least 7 characters long",
            MaxLength: "Email must be less than 100 characters long"
        },
        Validation: {
            MinLength: 3,
            MaxLength: 100
        }
    }, {
        Title: "Message",
        Text: {
            MinLength: "Message must be at least 10 characters long",
            MaxLength: "Message must be less than 1000 characters long"
        },
        Validation: {
            MinLength: 3,
            MaxLength: 1000
        }
    }
]

function Length(str: any) { return str.length }

function FirstLetterLowerCase(str: any) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

function CheckMinLength(Error: any, Input: any) {
    const MinLength = Error.Validation.MinLength
    const ActualLength = Length(Input)

    const Check = ActualLength < MinLength

    if (Check) {
        const MinLengthText = Error.Text.MinLength

        return {
            Error: true,
            Text: MinLengthText
        }
    }

    return { Error: false, }
}

function CheckMaxLength(Error: any, Input: any) {
    const MaxLength = Error.Validation.MaxLength
    const ActualLength = Length(Input)

    const Check = ActualLength > MaxLength

    if (Check) {
        const MaxLengthText = Error.Text.MaxLength

        return {
            Error: true,
            Text: MaxLengthText
        }
    }

    return { Error: false, }
}

function CheckTelephone(Error: any, Input: any) {
    const TelephoneFormat = Error.Validation.Format
    const Telephone = Input

    const Regex = new RegExp(TelephoneFormat)

    const Check = Regex.test(Telephone)

    if (Check) { return { Error: false } }

    else { return { Error: true, Text: Error.Text.Format } }
}

export default function ValidateInputs(Inputs: any) {
    var ValueToReturn: any;

    Errors.every((Error: any) => {
        const ErrorTitle = Error.Title
        const Input = Inputs[FirstLetterLowerCase(ErrorTitle)]

        const MinLength = CheckMinLength(Error, Input)
        const MaxLength = CheckMaxLength(Error, Input)

        if (MinLength.Error) {
            ValueToReturn = MinLength.Text
            return false
        }

        else if (MaxLength.Error) {
            ValueToReturn = MaxLength.Text
            return false
        }

        else if (Error.Title == "Telephone") {
            const Telephone = CheckTelephone(Error, Input)

            if (Telephone.Error) {
                ValueToReturn = Telephone.Text
            }

            return Telephone.Error ? false : true
        } else { ValueToReturn = true }

        return true
    })

    return ValueToReturn
}
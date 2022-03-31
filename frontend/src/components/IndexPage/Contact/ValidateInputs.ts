const Errors = [
    {
        Title: "Name",
        Text: {
            MinLength: "O Nome - Mínimo 3 caracteres",
            MaxLength: "O Nome - Máximo 50 caracteres"
        },
        Validation: {
            MinLength: 3,
            MaxLength: 50
        }
    }, {
        Title: "LastName",
        Text: {
            MinLength: "O Sobrenome - Mínimo 5 caracteres",
            MaxLength: "O Sobrenome - Máximo 100 caracteres"
        },
        Validation: {
            MinLength: 5,
            MaxLength: 100
        }
    }, {
        Title: "Telephone",
        Text: {
            MinLength: "O Telefone deve manter os seguintes formatos: +55 (55) xxxxx - xxxx ou +598 xxxxx - xxxx",
            MaxLength: "O Telefone deve manter os seguintes formatos: +55 (55) xxxxx - xxxx ou +598 xxxxx - xxxx",
            Format: "O Telefone deve manter os seguintes formatos: +55 (55) xxxxx - xxxx ou +598 xxxxx - xxxx"
        },
        Validation: {
            MinLength: 17,
            MaxLength: 21,
            Format: "\\+([0-9]{2,3})((\\s\\([0-9]{2}\\)\\s)|(\\s))([0-9]{4,5})\\s-\\s([0-9]{4})$"
        }
    }, {
        Title: "Email",
        Text: {
            MinLength: "O Email - Mínimo 3 caracteres",
            MaxLength: "O Email - Máximo 100 caracteres"
        },
        Validation: {
            MinLength: 3,
            MaxLength: 100
        }
    }, {
        Title: "Message",
        Text: {
            MinLength: "A Mensagem - Mínimo 3 caracteres",
            MaxLength: "A Mensagem - Máximo 1000 caracteres"
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

# Excellence Students Web Service
This web service manage pool of studetns. it's offers three GET methods:
Each method return Json object.
    
    * [Get all excellence Students](https://ex1-students-morkasus.herokuapp.com/allstudents)
    
    * [Get Student By ID (3)](https://ex1-students-morkasus.herokuapp.com/student/3)
    
    * [Get Student By Year (2016)](https://ex1-students-morkasus.herokuapp.com/studentsyear/2016)
    


## Usage
### To get all Excellence Students: 

`https://ex1-students-morkasus.herokuapp.com/allstudents`

JSON response example:
```
[
    {
        firstName: "John",
        lastName: "Doe",
        id: 3,
        avarage: "92",
        year: "2013"
    },
    {
        firstName: "Anna",
        lastName: "Smith",
        id: 4,
        average: "100",
        year: "2014"
    },
    {
        firstName: "Mor",
        lastName: "Kasus",
        id: 1,
        average: "100",
        year: "2016"
    },
    {
        firstName: "Yossi",
        lastName: "Azo",
        id: 7,
        average: "98",
        year: "2016"
    },
    {
        firstName: "Daniel",
        lastName: "sha",
        id: 8,
        average: "94",
        year: "2013"
    },
    {
        firstName: "Maria",
        lastName: "lala",
        id: 9,
        average: "100",
        year: "2014"
    },
    {
        firstName: "Dani",
        lastName: "dan",
        id: 10,
        average: "98",
        year: "2016"
    },
    {
        firstName: "Salah",
        lastName: "Moalem",
        id: 11,
        average: "92",
        year: "2016"
    }
]
```

### To Student by ID: 

`https://ex1-students-morkasus.herokuapp.com/student/{id}`

    * Replace {id} with some number (ex: 1, 2 ...)
    
JSON response example:
```
{
    firstName: "John",
    lastName: "Doe",
    id: 3,
    avarage: "92",
    year: "2013"
}
```
    
    
### To get all Excellence Students by Year: 

`https://ex1-students-morkasus.herokuapp.com/studentsyear/{year}`

    * Replace {year} with some number (ex: 2016, 2015, ...)

JSON response example:
```
[
    {
        firstName: "Mor",
        lastName: "Kasus",
        id: 1,
        average: "100",
        year: "2016"
    },
    {
        firstName: "Yossi",
        lastName: "Azo",
        id: 7,
        average: "98",
        year: "2016"
    },
    {
        firstName: "Dani",
        lastName: "dan",
        id: 10,
        average: "98",
        year: "2016"
    },
    {
        firstName: "Salah",
        lastName: "Moalem",
        id: 11,
        average: "92",
        year: "2016"
    }
]
```

## Author
Mor Kasus


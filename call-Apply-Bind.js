// call method
function jobCongratulation1(date, company) {
  console.log(
    `${date}, ${this.firstName} ${this.lastName}, Congratulations now you are ${this.role} at ${company}!`
  );
}

let person1 = {
  firstName: "Rahul",
  lastName: "Dev",
  role: "Frontend Dev",
};

let person2 = {
  firstName: "Bruce",
  lastName: "Dean",
  role: "Backend Dev",
};

jobCongratulation1.call(person1, "16th Jan 2024", "Microsoft");
jobCongratulation1.call(person2, "23rd Oct 2025", "Google");

// apply method
function jobCongratulation2(date, company) {
    console.log(
      `${date}, ${this.firstName} ${this.lastName}, Congratulations now you are ${this.role} at ${company}!`
    );
  }
  
  let person3 = {
    firstName: "Rahul",
    lastName: "Dev",
    role: "Frontend Dev",
  };
  
  let person4 = {
    firstName: "Bruce",
    lastName: "Dean",
    role: "Backend Dev",
  };
  
  jobCongratulation2.apply(person3, ["16th Jan 2024","Microsoft"]);
  jobCongratulation2.apply(person4, ["23rd Oct 2025","Google"]);

  // bind method
  function jobCongratulation3(date, company) {
    console.log(
      `${date}, ${this.firstName} ${this.lastName}, Congratulations now you are ${this.role} at ${company}!`
    );
  }
  
  let person5 = {
    firstName: "Rahul",
    lastName: "Dev",
    role: "Frontend Dev",
  };
  
  let person6 = {
    firstName: "Bruce",
    lastName: "Dean",
    role: "Backend Dev",
  };
  
  let storingBind1 = jobCongratulation3.bind(person5, "16th Jan 2024");
  let storingBind2 = jobCongratulation3.bind(person6, "23rd Oct 2025","Google");

  storingBind1("Microsoft");
  storingBind2();
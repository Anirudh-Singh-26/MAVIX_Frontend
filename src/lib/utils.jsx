// Utility functions
export const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

// Email validation
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Password validation (minimum 8 characters, at least one number, one letter)
export const isValidPassword = (password) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
  return passwordRegex.test(password);
};

// Form validation helper
export const validateForm = (fields) => {
  const errors = {};

  Object.entries(fields).forEach(([key, value]) => {
    if (!value || value.trim() === "") {
      errors[key] = "This field is required";
    } else if (key === "email" && !isValidEmail(value)) {
      errors[key] = "Please enter a valid email address";
    } else if (key === "password" && !isValidPassword(value)) {
      errors[key] =
        "Password must be at least 8 characters with one letter and one number";
    }
  });

  return errors;
};

// Simulate API call
export const mockApiCall = (data, delay = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, data });
    }, delay);
  });
};

// Format price for display
export const formatPrice = (price, isYearly = false) => {
  if (price === 0) return "Free";
  const formattedPrice = isYearly ? Math.floor(price * 10) : price;
  return `$${formattedPrice}${isYearly ? "/year" : "/month"}`;
};

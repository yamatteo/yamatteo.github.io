function gcd(a, b) {
    if ( ! b) {
        return a;
    }
    return gcd(b, a % b);
};

function variableSmallNatural() {
  this.collapse = function () {
    return Math.ceil(9 * Math.random( ));
    }
  };

function variableSmallNaturalOrZero() {
  this.collapse = function () {
    return Math.floor(10 * Math.random( ));
    }
  };

function variableSmallInteger() {
  this.collapse = function () {
    return Math.round(18 * Math.random( )) - 9;
    }
  }

function variableFraction() {
  this.numerator = new variableSmallNatural();
  this.denominator = new variableSmallNatural();
  this.collapse = function (minimal) {
    if (minimal == true) {
      var n = this.numerator.collapse();
      var d = this.denominator.collapse();
      var c = gcd(n, d);
      return [n/c , d/c];
      }
    else {
      return [this.numerator.collapse(), this.denominator.collapse()];
      }
    }
  }

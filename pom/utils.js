var hotel = {
    hotelPage: function() {
        return  $('[href="/hotels"]');
    },
    origin: function() {
        return $('//*[contains(@id, "fieldGridLocationCol")]')
    },

    startDate: function() {
        var myStartDate = new Date(new Date().getTime());
        return myStartDate.toJSON().split("T")[0]
    },
    endDate: function() {
        var myEndDate = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
        return myEndDate.toJSON().split("T")[0]
    },
    formatingDates: function(input) {
        //
        var pattern = /(\d{4})\-(\d{2})\-(\d{2})/;
        if (!input || !input.match(pattern)) {
            return null;
        }
        return input.replace(pattern, '$2/$3/$1');
    },
    firstDate: function() {
        return $('//*[contains(@class, "startDate")]');
    },
   
    searchButton: function() {
        return  $('//*[contains(@title, "Search hotels")]')
    }
}
module.exports = hotel;
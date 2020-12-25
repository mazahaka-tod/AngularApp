using AngularApp.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace AngularApp.Controllers
{
    [ApiController]
    [Route("api/orders")]
    public class OrderController : Controller
    {
        AngularAppContext db;
        public OrderController(AngularAppContext context)
        {
            db = context;
            if (!db.Orders.Any())
            {
                db.Orders.Add(new Order { Name = "iPhone X", Company = "Apple", Price = 79900 });
                db.Orders.Add(new Order { Name = "Galaxy S8", Company = "Samsung", Price = 49900 });
                db.Orders.Add(new Order { Name = "Pixel 2", Company = "Google", Price = 52900 });
                db.SaveChanges();
            }
        }
        [HttpGet]
        public IEnumerable<Order> Get()
        {
            return db.Orders.ToList();
        }

        [HttpGet("{id}")]
        public Order Get(int id)
        {
            Order order = db.Orders.FirstOrDefault(x => x.Id == id);
            return order;
        }

        [HttpPost]
        public IActionResult Post(Order order)
        {
            if (ModelState.IsValid)
            {
                db.Orders.Add(order);
                db.SaveChanges();
                return Ok(order);
            }
            return BadRequest(ModelState);
        }

        [HttpPut]
        public IActionResult Put(Order order)
        {
            if (ModelState.IsValid)
            {
                db.Update(order);
                db.SaveChanges();
                return Ok(order);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Order order = db.Orders.FirstOrDefault(x => x.Id == id);
            if (order != null)
            {
                db.Orders.Remove(order);
                db.SaveChanges();
            }
            return Ok(order);
        }
    }
}

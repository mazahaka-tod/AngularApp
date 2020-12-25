using Microsoft.EntityFrameworkCore;

namespace AngularApp.Models
{
    public class AngularAppContext : DbContext
    {
        public AngularAppContext(DbContextOptions<AngularAppContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Order> Orders { get; set; }
    }
}

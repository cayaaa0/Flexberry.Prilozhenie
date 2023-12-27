package Prilozhenie.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Prilozhenie.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Терминал
 */
@Entity(name = "IISPrilozhenieТерминал")
@Table(schema = "public", name = "Терминал")
public class Terminal {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерТер")
    private Integer номертер;

    @Column(name = "Адрес")
    private String адрес;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Parkomat")
    @Convert("Parkomat")
    @Column(name = "Паркомат", length = 16, unique = true, nullable = false)
    private UUID _parkomatid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Parkomat", insertable = false, updatable = false)
    private Parkomat parkomat;


    public Terminal() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерТер() {
      return номертер;
    }

    public void setНомерТер(Integer номертер) {
      this.номертер = номертер;
    }

    public String getАдрес() {
      return адрес;
    }

    public void setАдрес(String адрес) {
      this.адрес = адрес;
    }


}